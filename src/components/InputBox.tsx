interface InputBoxProps {
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string; // Новое свойство для отображения ошибок
  }
  
  export const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, onChange, error }) => {
    return (
      <div className="mb-4">
        <input
          className={`w-full p-4 border rounded-lg text-sm md:text-base focus:outline-none ${
            error ? "border-red-500" : "border-gray-300"
          } focus:ring-2 ${error ? "focus:ring-red-500" : "focus:ring-purple-600"}`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  };
  