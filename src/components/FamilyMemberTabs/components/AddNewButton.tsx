import React, { FC } from "react";

const AddNewButton: FC<{ addNewTab: () => void }> = ({ addNewTab }) => {
  return (
    <div className="m-1 px-2 border">
      <button onClick={addNewTab}>+</button>
    </div>
  );
};

export default AddNewButton;
