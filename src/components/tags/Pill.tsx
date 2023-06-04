import { PropsWithChildren } from "react";

interface PillProps {
  color: string;
}

export const Pill = ({ color, children }: PropsWithChildren<PillProps>) => {
  const divClassList = ``;
  const textClassList = ``;

  return (
    <div className="">
      <p className="">{children}</p>
    </div>
  );
};
