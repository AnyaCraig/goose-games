import { PropsWithChildren } from "react";

interface BrickPillProps {
  color: string;
}

export const BrickPill = ({
  color,
  children,
}: PropsWithChildren<BrickPillProps>) => {
  return (
    <div className="">
      <p className=""></p>
    </div>
  );
};
