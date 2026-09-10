import React from "react";
import IconInput from "../../components/IconInput";
import { LuSearch, LuMapPin, LuBriefcaseBusiness } from "react-icons/lu";

import { useAppContext } from "../../context/AppContext";

const SearchJobs = () => {
  const { setKeyword, setLocation, setJobType, submitQuery } = useAppContext();
  return (
    <div className="search-jobs flex-col">
      <div className="search-title">
        <h1 className="font-bold capitalize mb-1">
          Find your next opportunity
        </h1>
        <p className="text-xl">
          Search thousands of verified jobs from top companies and start <br />
          building your future today
        </p>
      </div>
      <div className="search-box">
        <form action="" role="search" onSubmit={submitQuery}>
          <div className="search-div">
            <label htmlFor="keyword">Job title or keyword</label>
            <IconInput
              type={"search"}
              placeholder={"e.g Product Designer"}
              onChange={(e) => setKeyword(e.target.value)}>
              <LuSearch />
            </IconInput>
          </div>
          <div className="search-div">
            <label htmlFor="keyword">Location</label>
            <IconInput
              type={"search"}
              placeholder={"e.g Lagos, Nigeria"}
              onChange={(e) => setLocation(e.target.value)}>
              <LuMapPin />
            </IconInput>
          </div>
          <div className="search-div">
            <label htmlFor="keyword">Job type</label>
            <IconInput type={"search"} placeholder={"Any Type"}>
              <LuBriefcaseBusiness />
            </IconInput>
          </div>
          <div className="md:self-end">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchJobs;
