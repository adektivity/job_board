import { NavLink, Outlet } from "react-router-dom";
import Verified from "../../../assets/icons/verified.svg?react";
import { LuMapPin, LuEllipsis } from "react-icons/lu";

const ProfileHeader = () => {
  return (
    <div className="card grid-col-two p-4 md:p-8 bg-linear-to-r from-[#D9D9D9] to-[#737373]">
      <div className="col-span-6 flex-center-profile ">
        <div className="h-37.5 w-37.5 md:h-40 md:w-40 shrink-0">
          <img
            src="/fallback.png"
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        {/* Personal Details */}
        <div className="flex-col min-w-0">
          <span className="inline-flex justify-center rounded-full border border-secondary bg-ui-green px-2 py-1 text-xs text-secondary font-semibold">
            Available for hire
          </span>
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-lg font-semibold truncate min-w-0">
              Adekoya Johnson
            </h3>
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
      <div className="hidden sm:col-span-6 sm:flex items-end justify-end gap-3 font-bold">
        <button className="profileBtn">Follow</button>
        <button className="profileBtn">Hire</button>
        <button className="profileBtn">Message</button>
        <button className="px-3 py-1 text-sm text-center border border-secondary rounded-sm">
          <LuEllipsis className="icon" />
        </button>
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
      {/* <div>
        <ProfileContent />
      </div> */}
    </div>
  );
};

export default Profile;
