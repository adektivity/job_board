import { NavLink, Outlet } from "react-router-dom";
import Verified from "../../../assets/icons/verified.svg?react";
import { LuMapPin } from "react-icons/lu";

const ProfileHeader = () => {
  return (
    <div className="card grid-col-two p-8 bg-linear-to-r from-[#D9D9D9] to-[#737373]">
      <div className="col-span-6 flex-center-profile">
        <div className="h-37.5 w-37.5 md:h-40 md:w-40">
          <img
            src="/fallback.png"
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        {/* Personal Details */}
        <div className="flex-col shrink-0">
          <span className="inline-flex justify-center rounded-full border border-secondary bg-ui-green px-2 py-1 text-xs text-secondary font-semibold">
            Available for hire
          </span>
          <div className="details">
            <h3 className="text-lg font-semibold">Aisha Johnson</h3>
            <span className="inline-flex h-5 w-5 items-center justify-center shrink-0">
              <Verified className="icon" />
            </span>
          </div>
          <div className="details-col text-sm font-medium">
            <span>UI/UX Designer</span>
            <span className="inline-flex items-center gap-1">
              <LuMapPin className="icon" />
              Lagos, Nigeria
            </span>
          </div>
        </div>
      </div>
      {/* Compensation */}
      <div className="hidden sm:col-span-6 sm:flex sm:flex-col items-center justify-center font-bold">
        <h1>
          #120,000 <span className="text-sm text-gray-500">/yr</span>
        </h1>
        <p className="text-sm text-gray-500">Expected Salary</p>
      </div>
    </div>
  );
};

const ProfileContent = () => {
  return (
    <div className="mt-2">
      <div>
        <nav className="nav-profile">
          <NavLink to="overview">overview</NavLink>
          <NavLink to="portfolio">portfolio</NavLink>
          <NavLink to="services">services</NavLink>
          <NavLink to="experience">experience</NavLink>
          <NavLink to="education">education</NavLink>
          <NavLink to="reviews">reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="container">
      <div>
        <ProfileHeader />
      </div>
      <div>
        <ProfileContent />
      </div>
    </div>
  );
};

export default Profile;
