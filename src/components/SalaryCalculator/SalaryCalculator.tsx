import React, { FC, useState } from "react";

import Input from "./components/Input";
import Toggle from "./components/Toggle";
import { Member } from "../../types";
import Slider from "./components/Slider";
import Button from "./components/Button";
import ResultDisplay from "./components/ResultDisplay";
import DateSelector from "./components/DateSelector";
import _ from "lodash-es";
import NumberIncrementInput from "./components/NumberIncrementInput";
import DeleteButton from "./components/DeleteButton";

const SalaryCalculator: FC<{
  member: Member;
  updateMember: (member: Member) => void;
  deleteMember: (id: number) => void;
}> = ({ member, updateMember, deleteMember }) => {
  const [frissHazasChecked, setFrissHazasChecked] = useState(false);

  const isFrissHazas = () => {
    const temp = _.cloneDeep(member);
    if (
      temp.hazassag_datuma !== undefined &&
      member.hazassag_datuma !== undefined
    ) {
      const tempDate = temp.hazassag_datuma;
      const year = tempDate.getFullYear();
      const newYear = year + 2;
      tempDate.setFullYear(newYear);
      if (
        tempDate > new Date() &&
        !(
          member.hazassag_datuma.getFullYear() === new Date().getFullYear() &&
          member.hazassag_datuma.getMonth() == new Date().getMonth()
        ) &&
        member.hazassag_datuma < new Date()
      ) {
        return true;
      }
      return false;
    }
    return undefined;
  };

  const handleFrissHazasCheck = () => {
    setFrissHazasChecked(!frissHazasChecked);
    if (!frissHazasChecked) {
      updateMember({ ...member, hazassag_datuma: undefined });
    }
  };

  const updateHazassagDatuma = (date: Date) => {
    updateMember({ ...member, hazassag_datuma: date });
  };

  const handleCsaladiKedvezmenyCheck = () => {
    if (member.csaladi_kedvezmeny === undefined) {
      updateMember({
        ...member,
        csaladi_kedvezmeny: { eltartottak: 0, kedvezmenyezett: 0 },
      });
    } else {
      updateMember({ ...member, csaladi_kedvezmeny: undefined });
    }
  };

  const updateCsaladiKedvezmeny = (
    eltartottak: number,
    kedvezmenyezett: number
  ) => {
    if (eltartottak < 0 || kedvezmenyezett < 0 || kedvezmenyezett > eltartottak)
      return;

    updateMember({
      ...member,
      csaladi_kedvezmeny: { eltartottak, kedvezmenyezett },
    });
  };

  const updateCalculation = () => {
    const szja = member.brutto * 0.15;
    const tb = member.brutto * 0.185;
    member.netto = member.brutto - szja - tb;

    if (member.szja && member.brutto <= 499952) {
      member.netto += szja;
    } else if (member.szja && member.brutto > 499952) {
      member.netto += szja - (member.brutto - 499952) * 0.15;
    }
    if (member.szemelyi_kedvezmeny) {
      member.netto +=
        member.brutto - member.netto > 77300
          ? 77300
          : member.brutto - member.netto;
    }

    if (isFrissHazas()) {
      member.netto += 5000;
    }

    if (member.csaladi_kedvezmeny !== undefined) {
      switch (member.csaladi_kedvezmeny.kedvezmenyezett) {
        case 0:
          break;
        case 1:
          member.netto += 10000 * member.csaladi_kedvezmeny.eltartottak;
          break;
        case 2:
          member.netto += 20000 * member.csaladi_kedvezmeny.eltartottak;
          break;
        default:
          member.netto += 33000 * member.csaladi_kedvezmeny.eltartottak;
          break;
      }
    }
    member.netto = Math.round(member.netto);
    return member.netto;
  };
  return (
    <div>
      {member?.name} bérének kiszámítása
      <DeleteButton onClick={() => deleteMember(member.id)} />
      <Input
        label="Név"
        value={member.name}
        onChange={(e) => updateMember({ ...member, name: e.target.value })}
      />
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
        checked={frissHazasChecked}
        onChange={() => {
          handleFrissHazasCheck();
        }}
      />
      {frissHazasChecked && (
        <DateSelector
          updateDate={updateHazassagDatuma}
          jogosult={isFrissHazas()}
        >
          {member.hazassag_datuma === undefined
            ? "Házasságkötés dátuma"
            : new Date(member.hazassag_datuma).toLocaleDateString()}
        </DateSelector>
      )}
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
        checked={member.csaladi_kedvezmeny !== undefined}
        onChange={() => handleCsaladiKedvezmenyCheck()}
      />
      {member.csaladi_kedvezmeny !== undefined && (
        <NumberIncrementInput
          eltartotak={member.csaladi_kedvezmeny.eltartottak}
          kedvezmenyezett={member.csaladi_kedvezmeny.kedvezmenyezett}
          updateCsaladiKedvezmeny={updateCsaladiKedvezmeny}
        />
      )}
      <div>
        <h2>Nettó bér:</h2>
        <ResultDisplay netto={updateCalculation()} />
      </div>
    </div>
  );
};

export default SalaryCalculator;
