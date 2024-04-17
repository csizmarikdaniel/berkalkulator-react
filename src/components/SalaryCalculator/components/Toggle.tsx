import React, { FC, useState } from "react";

type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Toggle: FC<ToggleProps> = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="checkbox" className="toggle" {...props} />
    </div>
  );
};

export default Toggle;
