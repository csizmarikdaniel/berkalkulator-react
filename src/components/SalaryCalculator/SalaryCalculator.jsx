import { useState } from "react";

import Input from "./components/Input";
import Toggle from "./components/Toggle";

const SalaryCalculator = ({ index }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      SalaryCalculator
      <p>{index}</p>
      <Input label="Bruttó bér" type="number" />
      <Toggle checked={toggle} onChange={setToggle} />
    </div>
  );
};

export default SalaryCalculator;
