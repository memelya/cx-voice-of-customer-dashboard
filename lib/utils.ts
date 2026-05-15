import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDelta = (value: number, suffix = "") => `${value > 0 ? "+" : ""}${value}${suffix}`;
