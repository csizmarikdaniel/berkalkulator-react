import React, { FC } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | undefined;
};

const Input: FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="input input-bordered" {...props} />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
