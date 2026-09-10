import React from "react";
import {
  formatSalary,
  formatPostedDate,
  formatContractTime,
} from "../../../utils/FormatJob";
import {
  LuCheck,
  LuMapPin,
  LuBookmark,
  LuStar,
  LuTag,
  LuBriefcaseBusiness,
} from "react-icons/lu";

const JobCard = ({ result }) => {
  const {
    title,
    salary_min,
    salary_max,
    created,
    contract_time,
    company,
    location,
  } = result;
  // console.log(contract_time);
  return (
    <>
      <div className="card flex flex-start gap-4 p-4">
        {/* Bookmark button */}
        <button type="button" className="save-btn">
          <LuBookmark className="icon" />
        </button>
        {/* Company Logo */}
        <div className="col-span-4">
          <img
            src="/fallback.png"
            alt=""
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover shrink-0"
          />
        </div>
        <div className="flex-1 min-w-0 pr-6">
          {/* Job Description */}
          <div className="details pr-6">
            <h2 className="font-semibold">{title}</h2>
            <span className="inline-flex items-center gap-1 rounded-full border border-primary bg-ui-teal px-3 py-1 text-sm font-semibold">
              Featured
            </span>
          </div>
          {/* Company Details */}
          <div className="mt-1 details pr-6">
            <h2 className="font-medium">{company.display_name}</h2>
            <span className="inline-flex text-gray-500 font-medium items-center gap-1">
              <LuMapPin className="icon" />
              {location.display_name}
            </span>
          </div>

          {/* Job Details */}
          <div className="mt-1 details text-sm font-medium">
            <p className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded">
                <LuBriefcaseBusiness className="icon" />
              </span>
              {formatContractTime(contract_time)}
            </p>
            <p className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded">
                <LuTag className="icon" />
              </span>
              {formatSalary(salary_min, salary_max)}
            </p>
            <span className="text-ui-text">|</span>
            <p>{formatPostedDate(created)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
