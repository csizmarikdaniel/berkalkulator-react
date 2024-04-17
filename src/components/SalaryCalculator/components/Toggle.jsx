import * as Switch from "@radix-ui/react-switch";

const Toggle = ({ label, name, checked, onChange }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Switch.Root id={name} checked={checked} onCheckedChange={onChange}>
      <Switch.Thumb />
    </Switch.Root>
  </div>
);

export default Toggle;
