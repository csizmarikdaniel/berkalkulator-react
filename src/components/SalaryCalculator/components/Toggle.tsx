import React, { FC, useState } from "react";

type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Toggle: FC<ToggleProps> = ({ label, name, ...props }) => {
  return (
    <div className="flex gap-2">
      <input type="checkbox" className="toggle" {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Toggle;
