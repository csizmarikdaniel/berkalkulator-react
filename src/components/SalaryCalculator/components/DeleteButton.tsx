import React, { FC } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton: FC<{ onClick: () => void; className: string }> = ({
  onClick,
  className,
}) => (
  <button onClick={onClick} className={`btn btn-red ${className}`}>
    <FaRegTrashAlt />
  </button>
);

export default DeleteButton;
