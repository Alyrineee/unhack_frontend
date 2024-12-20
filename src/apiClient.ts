import axios from "axios";

// Создаём экземпляр axios
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Укажите URL бэкенда
  headers: {
    "Content-Type": "application/json",
  },
});

// Интерсептор для запросов
apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Интерсептор для ответов
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Если ошибка 401 и это не повторный запрос
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const { data } = await axios.post(
            "http://212.22.90.46:8000/api/token/",
            { refresh: refreshToken }
          );

          // Сохраняем новый токен
          localStorage.setItem("accessToken", data.access);

          // Повторяем оригинальный запрос с новым токеном
          originalRequest.headers.Authorization = `Bearer ${data.access}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Если обновление токена не удалось, удаляем токены и перенаправляем на /login
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
