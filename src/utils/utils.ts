import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ms from "ms";

export const capitalize = (str: string) => {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? "" : " ago"
    }`;
};

export const lerp = (start: number, end: number, amt: number) => {
  return (1 - amt) * start + amt * end;
};

export const openExternalLink = (link: string) => {
  window.open(link, "_blank");
};

export const threeLinks = [
  { title: "Docs", href: "https://threejs.org/docs/" },
  { title: "Examples", href: "https://threejs.org/examples/" },
  { title: "Journey", href: "https://threejs-journey.com/" },
];

export interface CommonsProps {
  className?: string;
  children?: React.ReactNode;
}
