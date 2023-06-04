import { Mission } from "../../types";

interface MissionListItemProps {
  mission: Mission;
}

export const MissionListItem = ({ mission }: MissionListItemProps) => {
  return (
    <div>
      <p>{mission.name}</p>
      <p>{mission.description}</p>
    </div>
  );
};
