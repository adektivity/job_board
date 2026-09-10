import Verified from "../../../assets/icons/verified.svg?react";
import { LuCheck, LuMapPin } from "react-icons/lu";

const ProfileHeader = () => {
  return (
    <div className="card grid-col-two p-8 bg-linear-to-r from-[#D9D9D9] to-[#737373]">
      <div className="col-span-2">
        <img
          src="/fallback.png"
          alt=""
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
        />
      </div>
      {/* Personal Details */}
      <div className="col-span-2 sm:col-span-8">
        <span className="inline-flex items-center gap-1 rounded-full border border-secondary bg-ui-green px-3 py-1 text-xs text-secondary font-semibold">
          Available for hire
        </span>
        <div className="details pr-6">
          <h3 className="text-lg font-semibold">Aisha Johnson</h3>
          <span className="inline-flex h-5 w-5 items-center justify-center  shrink-0">
            <Verified className="icon" />
          </span>
        </div>
        <div className="mt-1 details gap-x-2 gap-y-1 text-sm font-medium">
          <span>UI/UX Designer</span>
          <span className="text-xl font-bold">●</span>
          <span className="inline-flex items-center gap-1">
            <LuMapPin className="icon" />
            Lagos, Nigeria
          </span>
        </div>
      </div>
      {/* Compensation */}
      <div className="hidden sm:col-span-2 sm:flex sm:flex-col items-center justify-center font-bold">
        <h1>
          #120,000 <span className="text-sm text-gray-500">/yr</span>
        </h1>
        <p className="text-sm text-gray-500">Expected Salary</p>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <section>
      <div className="container">
        <div>
          <ProfileHeader />
        </div>
        <div>Content</div>
      </div>
    </section>
  );
};

export default Profile;
