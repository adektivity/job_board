import { useAppContext } from "../../../context/AppContext";

import TalentCard from "./TalentCard";
import SearchJobs from "../SearchJobs";
import QuickActions from "./QuickActions";

const FindTalents = () => {
  const { talents } = useAppContext();
  return (
    <div className="container">
      <SearchJobs />
      <div className="mt-4 flex-row">
        <div>
          {talents.map((talent) => (
            <div key={talent.id} className="mb-4">
              <TalentCard talent={talent} />
            </div>
          ))}
        </div>
        {/* Quick Actions Card/Featured */}
        <div className="flex-col-left">
          <QuickActions />
          <Featured talents={talents} />
        </div>
      </div>
    </div>
  );
};

export default FindTalents;

const Featured = ({ talents = [] }) => {
  const randomTalent = Math.floor(Math.random() * talents.length);
  const featuredTalent = talents[randomTalent] || {};
  console.log(featuredTalent);
  const { profileImage, firstName, lastName } = featuredTalent;
  return (
    <div className="border rounded-lg p-2">
      <h3>Featured Talent</h3>
      <div>
        <img src={profileImage} alt="" />
        <div>
          <p>
            {firstName} {lastName}
          </p>
        </div>
      </div>
    </div>
  );
};
