import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { data } from "react-router-dom";

export const ProvideContext = ({ children }) => {
  // Jobs using Adzuna api
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // Talents
  const [talents, setTalents] = useState([]);
  // Feed
  const [feed, setFeed] = useState([]);
  // Control theme
  const [theme, setTheme] = useState("light");
  // Search jobs or talents
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  // Query submission
  const [query, setQuery] = useState("");

  const getJobs = async (searchValue = "") => {
    const app_id = import.meta.env.VITE_APP_ID;
    const app_key = import.meta.env.VITE_APP_KEY;
    const page = 1;
    const country = "us";
    const findJob = "product designer";
    // Adzuna api to get and filter jobs
    const url = searchValue
      ? `https://api.adzuna.com/v1/api/jobs/${encodeURIComponent(location)}/search/${page}` +
        `?app_id=${app_id}` +
        `&app_key=${app_key}` +
        `&results_per_page=20` +
        `&what=${encodeURIComponent(keyword)}` +
        `&content-type=application/json`
      : `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}` +
        `?app_id=${app_id}` +
        `&app_key=${app_key}` +
        `&results_per_page=20` +
        `&what=${encodeURIComponent(findJob)}` +
        `&content-type=application/json`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setJobs(data);
    } catch (error) {
      console.log("Error fetching Adzuna Jobs:", error);
      setErrorMessage("Error fetching content: Try refreshing the page!");
    }
  };

  // Fetching Talents from a fake api for now
  const getTalents = async () => {
    const url = "/users.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setTalents(data.users);
    } catch (error) {
      console.log("Error fetching Adzuna Jobs:", error);
      setErrorMessage("Error fetching content: Try refreshing the page!");
    }
  };
  // Adzuna api useEffect
  useEffect(() => {
    getJobs(query);
  }, [query]);
  // Talents useEffect
  useEffect(() => {
    getTalents();
  }, []);

  // Theme useEffect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Theme toggler
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // query submission
  const submitQuery = (e) => {
    e.preventDefault();
    // console.log(`Query sumitted successfully: ${query}`);
    setQuery(e);
    console.log(`Keyword: ${keyword}, Location: ${location}`);
  };

  const contextValue = {
    theme,
    toggleTheme,
    jobs,
    errorMessage,
    setLocation,
    setKeyword,
    setJobType,
    submitQuery,
    talents,
    setTalents,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
