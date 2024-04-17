import React, { FC } from "react";

const Tab: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="m-1 px-2 border">{children}</div>;
};

export default Tab;
