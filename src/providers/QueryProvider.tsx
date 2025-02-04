"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CommonsProps } from "@utils/utils";

export const CustomQueryProvider = ({ children }: CommonsProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
