import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import apiClient from "../apiClient";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await apiClient.post("/api/token/", {
        email,
        password,
      });

      console.log(response);

      if (response.status === 200) {
        const { access, refresh } = response.data;

        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);

        navigate("/profile");
      }
    } catch (err: any) {
      setError(err.response?.data?.detail || "Invalid email or password.");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome back</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            {error && (
              <div className="text-red-500 text-center text-sm mb-4">
                {error}
              </div>
            )}

            <InputBox
              type="email"
              placeholder="Email address"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <InputBox
              type="password"
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />

            <Button text="Continue" type="submit" />
            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="/sign_up" className="text-purple-600 hover:underline">
                Sign up
              </a>
            </div>

            <Divider />

            <Button text="Continue with GitHub" variant="secondary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
