import React, { FC } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className="btn btn-red">
    <FaRegTrashAlt />
  </button>
);

export default DeleteButton;
