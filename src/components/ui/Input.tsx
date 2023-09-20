import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

// định nghĩa kiểu dữ liệu
type InputProps = {
  register?: UseFormRegister<any>;
  error?: string;
  name?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  className?: string;
  disabled?: boolean;
};

const Input = ({
  register,
  error,
  name,
  placeholder,
  type,
  label,
  className,
  disabled,
}: InputProps) => {
  return (
    <div className={className}>
      {label && <p className="mb-1">{label}</p>}
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className="outline-none block w-full p-10 text-white border border-white-300 rounded-lg bg-[#333]"
        {...register(name)}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
