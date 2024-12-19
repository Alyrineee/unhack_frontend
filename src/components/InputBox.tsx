interface InputBoxProps {
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, onChange }) => {
    return (
        <input
            className="w-full p-4 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            style={{
                padding: "10px",
                margin: "10px 0",
                width: "100%",
                fontSize: "16px",
            }}
        />
    );
};