import React, { FC, useState } from "react";
import DateSelectorModal from "./DateSelectorModal";
import { Member } from "../../../types";
import Input from "./Input";
import moment from "moment";

const DateSelector: FC<{
  updateDate: (date: Date) => void;
  jogosult?: boolean;
  children: React.ReactNode;
}> = ({ updateDate, jogosult, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");

  return (
    <div>
      <button className="btn btn-xs" onClick={() => setIsOpen(true)}>
        {children}
      </button>
      <DateSelectorModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        updateDate={updateDate}
      />

      {jogosult !== undefined && jogosult ? (
        <div className="badge badge-success">Jogosult</div>
      ) : (
        <div className="badge badge-error">Nem jogosult</div>
      )}
    </div>
  );
};

export default DateSelector;
