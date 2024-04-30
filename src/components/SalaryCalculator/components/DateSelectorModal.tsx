import React, { FC, useState } from "react";
import Input from "./Input";
import moment from "moment";

const DateSelectorModal: FC<{
  open: boolean;
  onClose: () => void;
  updateDate: (date: Date) => void;
}> = ({ open, onClose, updateDate }) => {
  const [date, setDate] = useState("");
  return (
    <dialog open={open} className="modal">
      <div className="absolute h-screen w-screen bg-black/70" />
      <div className="modal-box flex flex-col gap-4 p-10">
        <form>
          <p className="mb-4">
            A kedvezmény először a házasságkötést követő hónapra vehető igénybe
            és a házassági életközösség alatt legfeljebb 24 hónapon keresztül
            jár
          </p>
          <Input
            label="Házasságkötés dátuma"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            error={moment(date).isValid() ? "" : "Helytelen dátum"}
          />
          <div className="mt-6 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="btn">
              Mégse
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                moment(date).isValid() && updateDate(new Date(date));
                onClose();
              }}
            >
              Mentés
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default DateSelectorModal;
