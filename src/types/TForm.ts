import type { TId } from "./TId";
import type { TIsoDate } from "./TIsoDate";
import type { TUser } from "./TUser";

export type TForm = {
  id: TId;
  title: string;
  description: string;
  createdAt: TIsoDate;
  updatedAt: TIsoDate;
  isPublished: boolean;
  author: TUser; // author of the form
  image: string; // URL to the form image
  categories: string[];
  tags: string[];
  expirationDate: TIsoDate | null;
  timeToFill: string; // estimated time to fill the form, e.g., "5 minutes"
};
