import React, { FC } from "react";

const TabContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-row">{children}</div>;
};

export default TabContainer;
