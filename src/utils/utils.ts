import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export interface ICommons {
  className?: string;
  children?: React.ReactNode;
}

export const RESULTS_PER_PAGE = 7;


