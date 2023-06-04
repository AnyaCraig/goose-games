import { Mission } from "../../types";
import { MissionListItem } from "./MissionListItem";

interface MissionListProps {
  missions: Mission[];
}

export const MissionList = ({ missions }: MissionListProps) => {
  return (
    <div className="">
      {missions.map((mission) => (
        <MissionListItem mission={mission} />
      ))}
    </div>
  );
};
