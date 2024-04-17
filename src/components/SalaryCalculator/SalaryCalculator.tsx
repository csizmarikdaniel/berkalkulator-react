import React, { FC, useState } from "react";

import Input from "./components/Input";
import Toggle from "./components/Toggle";

const SalaryCalculator: FC<{ index: number }> = ({ index }) => {
  const [toggle, setToggle] = useState(true);
  const [brutto, setBrutto] = useState("");
  return (
    <form>
      SalaryCalculator
      <p>{index}</p>
      <Input label="Bruttó bér" type="number" />
      <Toggle
        label="Toggle"
        name="toggle"
        checked={toggle}
        onChange={() => setToggle(!toggle)}
      />
    </form>
  );
};

export default SalaryCalculator;
