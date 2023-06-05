import { Mission } from "../../types";
import { MissionListItem } from "./MissionListItem";

interface MissionListProps {
  missions: Mission[];
}

export const MissionList = ({ missions }: MissionListProps) => {
  return (
    <>
      <h2>Missions</h2>
      <ul>
        {missions.map((mission, i) => (
          <MissionListItem key={i} mission={mission} />
        ))}
      </ul>
    </>
  );
};
