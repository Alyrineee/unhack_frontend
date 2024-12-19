interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({ text, onClick, variant = "primary" }: ButtonProps) => {
  const baseStyle =
    "w-full p-4 rounded-lg font-semibold text-white transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-purple-600 hover:bg-purple-700"
      : "bg-gray-200 text-black hover:bg-gray-300";

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles}`} type="button">
      {text}
    </button>
  );
};
