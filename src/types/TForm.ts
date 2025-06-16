import type { TId } from "./TId";
import type { TUser } from "./TUser";

export type TForm = {
  id: TId;
  title: string;
  description: string;
  createdAt: string; // date in ISO format
  updatedAt: string; // date in ISO format
  isPublished: boolean;
  author: TUser; // author of the form
  image: string; // URL to the form image
  categories: string[];
  tags: string[];
  expirationDate: string | null; // date in ISO format or null
  timeToFill: string; // estimated time to fill the form, e.g., "5 minutes"
};
