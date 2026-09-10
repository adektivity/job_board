// Format Salary
export const formatSalary = (min, max, currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  if (!min && !max) {
    return "Salary not disclosed";
  }
  if (min && max && max !== min) {
    return `${formatter.format(min)} - ${formatter.format(max)}`;
  }
  return formatter.format(min || max);
};

// Format Job listing date
export const formatPostedDate = (dateStr) => {
  const posted = new Date(dateStr);

  const diffDays = Math.floor((Date.now() - posted) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Posted Today";
  if (diffDays === 1) return "Posted Yesterday";

  return `Posted ${diffDays} days ago`;
};

// Format Job Type
export const formatContractTime = (value) => {
  const CONTRACT_LABEL = {
    full_time: "Full Time",
    part_time: "Part Time",
  };
  return CONTRACT_LABEL[value] || "Not Specified";
};
