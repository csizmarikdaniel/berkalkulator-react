import React, { FC } from "react";
import * as Switch from "@radix-ui/react-switch";

type ToggleProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Toggle: FC<ToggleProps> = ({ label, name, checked, onChange }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Switch.Root id={name} checked={checked} onCheckedChange={onChange}>
      <Switch.Thumb />
    </Switch.Root>
  </div>
);

export default Toggle;
