import React, { FC, useState } from "react";

import Input from "./components/Input";
import Toggle from "./components/Toggle";
import { Member } from "../../types";
import Slider from "./components/Slider";
import Button from "./components/Button";

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
        value={member.brutto}
        onChange={(e) =>
          updateMember({
            ...member,
            brutto: isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber,
          })
        }
      />
      <Slider
        value={member.brutto}
        onChange={(e) =>
          updateMember({ ...member, brutto: e.target.valueAsNumber })
        }
        min={0}
        max={1000000}
        step={1}
      />
      <div className="hidden">
        <Button
          onClick={() =>
            updateMember({
              ...member,
              brutto: member.brutto - member.brutto * 0.05,
            })
          }
        >
          -5%
        </Button>
        <Button
          onClick={() =>
            updateMember({
              ...member,
              brutto: member.brutto - member.brutto * 0.01,
            })
          }
        >
          -1%
        </Button>
        <Button
          onClick={() =>
            updateMember({
              ...member,
              brutto: member.brutto + member.brutto * 0.01,
            })
          }
        >
          +1%
        </Button>
        <Button
          onClick={() =>
            updateMember({
              ...member,
              brutto: member.brutto + member.brutto * 0.05,
            })
          }
        >
          +5%
        </Button>
      </div>
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
    </form>
  );
};

export default SalaryCalculator;
