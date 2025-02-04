"use client"

import { useJobItemsContext } from "@providers/JobItemsContextProvider";
import JobList from "./JobList";

export default function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
}
