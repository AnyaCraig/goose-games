import React, { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  const classList = "w-full bg-teal-400 mb-32";

  return <div className={classList}>{children}</div>;
};
