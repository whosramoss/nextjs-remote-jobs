import { useQuery } from "@tanstack/react-query";

interface QueryProps {
  url: string;
  key: string;
}

export const useApiFetchFromQuery = <T>({ url, key }: QueryProps) => {

  const fetcher = async (): Promise<T> => {
    const response = await fetch(url);
    return response.json();
  }

  return useQuery<T>({ queryKey: [key], queryFn: fetcher });
};
