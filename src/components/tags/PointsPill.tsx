import { MissionCategory } from "../../types";
import { Pill } from "./Pill";

interface PointsPillProps {
  category: MissionCategory;
  pointValue: number;
}

export const PointsPill = ({ category, pointValue }: PointsPillProps) => {
  const categoryColorClasses = {
    text: "text-mission-bg",
    photoVideo: "photoVideo-mission-bg",
    gps: "gps-mission-bg",
    DEFAULT: "gps-mission-bg",
  };

  return (
    <Pill
      customClass={categoryColorClasses[category]}
    >{`${pointValue} PTS`}</Pill>
  );
};
