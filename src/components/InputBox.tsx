interface InputBoxProps {
  type: string;
  placeholder: string;
}

export const InputBox = ({ type, placeholder }: InputBoxProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-4 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
  />
);
