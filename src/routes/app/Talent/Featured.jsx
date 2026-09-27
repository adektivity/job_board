import { LuClock3, LuMapPinCheckInside } from "react-icons/lu";

const Featured = ({ talents = [] }) => {
  const randomTalent = Math.floor(Math.random() * talents.length);
  const featuredTalent = talents[randomTalent] || {};
  console.log(featuredTalent);
  const { profileImage, firstName, lastName, currentPosition } = featuredTalent;
  return (
    <div className="border rounded-lg p-2">
      <h3 className="font-semibold">Featured Talent</h3>
      <div className="flex items-start gap-2">
        <img
          src={profileImage}
          alt=""
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="text-sm">
          <p className="font-bold">
            {firstName} {lastName}
          </p>
          <p>{currentPosition?.title}</p>
          <p className="icon-flex text-xs">
            <LuClock3 className="icon" /> 4+ years experience
          </p>
          <p className="icon-flex text-xs">
            <LuMapPinCheckInside className="icon" />
            {currentPosition?.location}
          </p>
          <p className="text-xs font-semibold text-ui-text opacity-70">
            #1,100,000/yr
          </p>
        </div>
      </div>
      <button className="mt-1 w-full py-1 border border-ui-text rounded-md text-sm font-semibold text-ui-text opacity-80">
        View Profile
      </button>
    </div>
  );
};

export default Featured;
