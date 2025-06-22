import type { TIsoDate } from "../types/TIsoDate";

export const isoDateToDate = (isoDate: TIsoDate): Date => {
  return new Date(isoDate);
};

export const dateFormat = (date: Date, locale: string = "en-US", options?: Intl.DateTimeFormatOptions): string => {
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...options,
  });
};
