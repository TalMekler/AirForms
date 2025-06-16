export const isoDateToDate = (isoDate: string): Date => {
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid ISO date format");
  }
  return date;
};

export const dateFormat = (date: Date, locale: string = "en-US", options?: Intl.DateTimeFormatOptions): string => {
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...options,
  });
};
