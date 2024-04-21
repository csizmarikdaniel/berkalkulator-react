import React, { FC } from "react";

const AddNewButton: FC<{ addNewTab: () => void }> = ({ addNewTab }) => {
  return (
    <div className="m-1 px-2 border  hover:bg-slate-400 transition-all duration-300 cursor-pointer">
      <button onClick={addNewTab}>+</button>
    </div>
  );
};

export default AddNewButton;
