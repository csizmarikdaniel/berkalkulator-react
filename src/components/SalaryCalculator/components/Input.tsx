import React, { FC } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | undefined;
};

const Input: FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="input input-bordered"
      />
    </div>
  );
};

export default Input;
