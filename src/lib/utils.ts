import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const [day, month, year] = date.split("-");
  const isoDate = `${year}-${month}-${day}T00:00:00`;

  const currentDate = new Date().getTime();
  const targetDate = new Date(isoDate).getTime();
  const timeDifference = Math.abs(currentDate - targetDate);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Aujourd'hui";
  } else if (daysAgo < 7) {
    return `${fullDate} (il y a ${daysAgo}j)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (il y a ${weeksAgo} sem.)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (il y a ${monthsAgo} mois)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (il y a ${yearsAgo} an${yearsAgo > 1 ? "s" : ""})`;
  }
}