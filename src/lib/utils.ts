import { ClassValue, clsx } from "clsx";
import { ConfettiProps } from "react-confetti-explosion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smallConfettiProps: ConfettiProps = {
  force: 0.4,
  duration: 2200,
  particleCount: 30,
  width: 400,
};
