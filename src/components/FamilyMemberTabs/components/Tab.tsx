import React, { FC } from "react";

const Tab: FC<{ active: boolean; children: React.ReactNode }> = ({
  active,
  children,
}) => {
  return (
    <div
      className={`m-1 px-2 rounded-md hover:bg-slate-400 transition-all duration-300 cursor-pointer ${
        active && "bg-white"
      }`}
    >
      {children}
    </div>
  );
};

export default Tab;
