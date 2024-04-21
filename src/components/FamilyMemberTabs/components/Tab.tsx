import React, { FC } from "react";

const Tab: FC<{ active: boolean; children: React.ReactNode }> = ({
  active,
  children,
}) => {
  return (
    <div
      className={`m-1 px-2 border hover:bg-slate-400 transition-all duration-300 cursor-pointer ${
        active && "bg-slate-300"
      }`}
    >
      {children}
    </div>
  );
};

export default Tab;
