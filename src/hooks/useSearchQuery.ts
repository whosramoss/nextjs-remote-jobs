"use client"
import { JobItem } from "@models/job-models";
import { useQuery } from "@tanstack/react-query";


const fetchJobItems = async (
  searchText: string
): Promise<{
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
}> => {
  const response = await fetch(`/api/jobs`);

  // 4xx or 5xx
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }
  const data = await response.json();
  return data;
};

export function useSearchQuery(searchText: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["job-items", searchText],
    queryFn: () => fetchJobItems(searchText),
  });

  return {
    jobItems: data?.jobItems,
    isLoading: isLoading,
  } as const;
}

