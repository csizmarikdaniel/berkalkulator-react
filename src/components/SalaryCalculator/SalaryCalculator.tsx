import React, { FC } from "react";
import { useState } from "react";

import Input from "./components/Input";
import Toggle from "./components/Toggle";

const SalaryCalculator: FC<{ index: number }> = ({ index }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      SalaryCalculator
      <p>{index}</p>
      <Input label="Bruttó bér" type="number" value="" />
      <Toggle
        checked={toggle}
        onChange={setToggle}
        label="Toggle"
        name="toggle"
      />
    </div>
  );
};

export default SalaryCalculator;
