import {
  gpsMissionIcon,
  photoVideoMissionIcon,
  textMissionIcon,
  mapMarkerIcon,
} from "../../assets/icons";
import { Mission, MISSIONCATEGORY } from "../../types";
import { BrickPill } from "../tags/BrickPill";
import { PointsPill } from "../tags/PointsPill";

interface MissionListItemProps {
  mission: Mission;
}

export const MissionListItem = ({ mission }: MissionListItemProps) => {
  const answers = mission.accepted_answers || [];

  const answerBox = (
    <>
      <h4>Accepted Answers</h4>
      <ul className="flex">
        {answers.map((answer, i) => (
          <li>
            <BrickPill key={i} color="lightGrey">
              {answer}
            </BrickPill>
          </li>
        ))}
      </ul>
    </>
  );

  const locationBox = (
    <>
      <h4>Accepted Location</h4>
      <div className="flex">
        <BrickPill icon={mapMarkerIcon} color="lightGrey">
          {mission.location}
        </BrickPill>
      </div>
    </>
  );

  const missionCategoryImages = {
    [MISSIONCATEGORY.gps]: gpsMissionIcon,
    [MISSIONCATEGORY.photoVideo]: photoVideoMissionIcon,
    [MISSIONCATEGORY.text]: textMissionIcon,
  };

  const missionImage =
    missionCategoryImages[
      mission.category as keyof typeof missionCategoryImages
    ];

  return (
    <li className="mt-md mb-lg flex">
      <div className="max-w-[100px]">
        <img
          src={missionImage}
          alt={`${mission.category} mission`}
          className="w-full"
        />
      </div>
      <div className="pl-xs">
        <div className="flex justify-between content-start">
          <h3 className="mt-0">{mission.name}</h3>
          {!!mission.points && (
            <PointsPill
              category={mission.category}
              pointValue={mission.points}
            />
          )}
        </div>
        <p>{mission.description}</p>
        {!!answers.length && answerBox}
        {!!mission.location && locationBox}
      </div>
    </li>
  );
};
