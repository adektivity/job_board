import { useAppContext } from "../../../context/AppContext";
import JobCard from "./JobCard";
import SearchJobs from "../SearchJobs";

const FindJobs = () => {
  const { jobs, errorMessage, handleBookmark } = useAppContext();
  const { count, results } = jobs;
  // Results not found
  if (!results) {
    return <p className="container">{errorMessage}</p>;
  }
  return (
    <div className="container">
      <SearchJobs />
      <div className="mt-2">
        {count && <p className="mb-2">{count} Jobs Found</p>}
        {results.map((result) => (
          <div key={result.id} className="mb-4">
            <JobCard result={result} handleBookmark={handleBookmark} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;
