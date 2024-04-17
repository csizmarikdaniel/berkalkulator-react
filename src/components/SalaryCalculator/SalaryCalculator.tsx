import React, { FC, useState } from "react";

import Input from "./components/Input";
import Toggle from "./components/Toggle";

type Member = {
  id: number;
  name: string;
  brutto: number;
  szja: boolean;
  friss_hazas: boolean;
  szemelyi_kedvezmeny: boolean;
  csaladi_kedvezmeny: boolean;
};

const SalaryCalculator: FC<{ member?: Member }> = ({ member }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <form>
      {member?.name} Bérének kiszámítása
      <Input label="Bruttó bér" type="number" defaultValue={member?.brutto} />
      <Toggle
        label="25 éven aluliak SZJA kedvezménye"
        name="szja"
        checked={member?.szja}
        onChange={() => setToggle(!toggle)}
      />
      <Toggle
        label="Friss házasok adókedvezménye"
        name="friss_hazas"
        checked={member?.friss_hazas}
        onChange={() => setToggle(!toggle)}
      />
      <Toggle
        label="Személyi adókedvezmény"
        name="szemelyi_kedvezmeny"
        checked={member?.szemelyi_kedvezmeny}
        onChange={() => setToggle(!toggle)}
      />
    </form>
  );
};

export default SalaryCalculator;
