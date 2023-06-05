import { PropsWithChildren } from "react";

interface PillProps {
  customClass: string;
}

export const Pill = ({
  customClass,
  children,
}: PropsWithChildren<PillProps>) => {
  const divClassList = `${customClass} pt-pillTop pb-0 px-xxs mr-xs rounded-2xl self-start`;
  const textClassList = `text-xs font-bold`;

  return (
    <div className={divClassList}>
      <p className={textClassList}>{children}</p>
    </div>
  );
};
