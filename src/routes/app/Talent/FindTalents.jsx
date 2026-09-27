import { useAppContext } from "../../../context/AppContext";

import TalentCard from "./TalentCard";
import SearchJobs from "../SearchJobs";
import QuickActions from "./QuickActions";
import Featured from "./Featured";

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
          <CallToAction />
          <Featured talents={talents} />
        </div>
      </div>
    </div>
  );
};

export default FindTalents;

const CallToAction = () => {
  return (
    <div className="border rounded-lg py-4 px-2 bg-linear-to-b from-[#65A3A2] to-[#B4BEBD]">
      <h2 className="font-bold capitalize">
        let top talents <br /> find you
      </h2>

      <p className="text-ui-text opacity-80 text-sm font-medium">
        Create a company profile and <br /> attract qualified candidates
      </p>
      <button className="mt-2 py-1.5 px-3 bg-[#1A9593] opacity-90 text-sm font-medium capitalize text-secondary border border-secondary rounded-md">
        create company profile
      </button>
    </div>
  );
};
