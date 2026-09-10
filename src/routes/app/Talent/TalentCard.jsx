import React from "react";
import Google from "../../../assets/icons/google.svg?react";
import { LuCheck, LuMapPin, LuBookmark, LuStar } from "react-icons/lu";

const TalentCard = ({ talent }) => {
  const { profileImage } = talent;
  return (
    <div className="container">
      <div className="card grid-col-two">
        {/* Bookmark button */}
        <button type="button" className="save-btn">
          <LuBookmark className="icon" />
        </button>
        {/* Avatar */}
        <div className="col-span-2">
          <img
            src={profileImage}
            alt=""
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover"
          />
        </div>
        {/* Personal Details */}
        <div className="col-span-2 sm:col-span-8">
          <div className="details pr-6">
            <h3 className="text-lg font-semibold">Aisha Johnson</h3>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 shrink-0">
              <LuCheck className="icon" strokeWidth={3} />
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-primary bg-ui-teal px-3 py-1 text-sm font-semibold">
              <LuStar className="icon fill-amber-300 text-amber-300" />
              Top Rated
            </span>
          </div>
          <div className="mt-1 details gap-x-2 gap-y-1 text-sm font-medium">
            <span>UI/UX Designer</span>
            <span className="text-xl font-bold">●</span>
            <span className="inline-flex items-center gap-1">
              <LuMapPin className="icon" />
              Lagos, Nigeria
            </span>
            <span className="text-xl font-bold">●</span>
            <span className="text-emerald-700">Available Now</span>
          </div>
          {/* Work Experience */}
          <div className="mt-1 details text-sm text-gray-600 font-medium">
            <p>5 years experience</p>
            <span className="text-ui-text">|</span>
            <p className="inline-flex items-center gap-1.5">
              Worked with{" "}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded">
                <Google className="icon" />
              </span>
            </p>
          </div>
          {/* Mobile-only price block: the "last div" is hidden below md, so its
              content is folded into the details column here instead */}
          <div className="mt-1 flex items-center gap-6 rounded-lg sm:hidden">
            <span className="text-sm text-gray-500">Expected Salary</span>
            <span className="font-bold text-xl">
              ₦120,000
              <span className="text-sm font-normal text-gray-500">/yr</span>
            </span>
          </div>
          {/* Skills */}
          <div className="mt-1 details text-sm">
            <p className="rounded-lg border border-ui-text px-3 py-1">
              UI Design
            </p>
          </div>
          {/* Contact */}
          <div className="mt-2 details text-base">
            <button className="btn border border-ui-text font-medium">
              View Profile
            </button>
            <button className="btn border border-ui-text font-medium">
              Invite to Connect
            </button>
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
    </div>
  );
};

export default TalentCard;
