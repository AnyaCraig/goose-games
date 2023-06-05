import { PropsWithChildren } from "react";

interface BrickPillProps {
  color: string;
  icon?: string | false;
}

export const BrickPill = ({
  color = "lightGrey",
  icon = false,
  children,
}: PropsWithChildren<BrickPillProps>) => {
  return (
    <div className="bg-lightGrey pt-xxs pb-0 px-xxs mr-xxs rounded-sm flex content-center">
      {!!icon && (
        <img
          src={icon}
          alt=""
          className="w-pillIconWidth mt-pillIconTopMargin mr-tiny"
        />
      )}
      <p className="leading-4 text-xs font-bold uppercase">{children}</p>
    </div>
  );
};
