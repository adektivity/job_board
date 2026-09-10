import { useAppContext } from "../../../context/AppContext";

import TalentCard from "./TalentCard";
import SearchJobs from "../SearchJobs";

const FindTalents = () => {
  const { talents } = useAppContext();
  return (
    <div className="container">
      <SearchJobs />
      <div className="mt-4">
        {talents.map((talent) => (
          <div key={talent.id} className="mb-4">
            <TalentCard talent={talent} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTalents;
