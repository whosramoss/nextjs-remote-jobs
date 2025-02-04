"use client"
import { JobItemExpanded } from "@models/job-models";
import { useQueries, useQuery } from "@tanstack/react-query";

const fetchJobItem = async (id: number): Promise<{
  public: boolean;
  jobItem: JobItemExpanded;
}> => {
  const response = await fetch(`/api/jobs/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  const data = await response.json();
  return data;
};

export function useJobItem(id: number | null) {
  const { data, isLoading } = useQuery({
    queryKey: ["job-item", id],
    queryFn: () => (id ? fetchJobItem(id) : null),
  });

  return {
    jobItem: data?.jobItem,
    isLoading: isLoading,
  } as const;
}


export function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobItem) => Boolean(jobItem)) as JobItemExpanded[];

  const isLoading = results.some((result) => result.isLoading);

  return {
    jobItems,
    isLoading,
  };
}
