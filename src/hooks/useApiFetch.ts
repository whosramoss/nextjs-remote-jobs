import { useQuery } from "@tanstack/react-query";

interface QueryProps {
  url: string;
  key: any[];
}

export const useApiFetch = <T>({ url, key }: QueryProps) => {

  const fetcher = async (): Promise<T> => {
    const response = await fetch(url);
    return response.json();
  }

  return useQuery<T>({ queryKey: key, queryFn: fetcher });
};
