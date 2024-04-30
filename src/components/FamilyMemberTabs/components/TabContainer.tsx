import React, { FC } from "react";

const TabContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-row bg-slate-200 w-fit mx-3 p-1 rounded-md">
      {children}
    </div>
  );
};

export default TabContainer;
