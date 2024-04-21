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

const SalaryCalculator: FC<{
  member: Member;
  updateMember: (member: Member) => void;
}> = ({ member, updateMember }) => {
  return (
    <form>
      {member?.name} Bérének kiszámítása
      <Input
        label="Bruttó bér"
        type="number"
        defaultValue={member?.brutto}
        value={member.brutto}
        onChange={(e) =>
          updateMember({ ...member, brutto: e.target.valueAsNumber })
        }
      />
      <Toggle
        label="25 éven aluliak SZJA kedvezménye"
        name="szja"
        checked={member.szja}
        onChange={() => updateMember({ ...member, szja: !member.szja })}
      />
      <Toggle
        label="Friss házasok adókedvezménye"
        name="friss_hazas"
        checked={member?.friss_hazas}
        onChange={() =>
          updateMember({
            ...member,
            friss_hazas: !member.friss_hazas,
          })
        }
      />
      <Toggle
        label="Személyi adókedvezmény"
        name="szemelyi_kedvezmeny"
        checked={member?.szemelyi_kedvezmeny}
        onChange={() =>
          updateMember({
            ...member,
            szemelyi_kedvezmeny: !member.szemelyi_kedvezmeny,
          })
        }
      />
      <Toggle
        label="Családi kedvezmény"
        name="csaladi_kedvezmeny"
        checked={member?.csaladi_kedvezmeny}
        onChange={() =>
          updateMember({
            ...member,
            csaladi_kedvezmeny: !member.csaladi_kedvezmeny,
          })
        }
      />
      <button type="submit" className="btn">
        Kalkuláció
      </button>
    </form>
  );
};

export default SalaryCalculator;
