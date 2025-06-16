import type { TId } from "./TId";

export type TUser = {
  id: TId;
  firstName: string;
  lastName: string;
  email: string;
  image: string | null; // URL to the user's image or null if not available
  createdAt: string; // date in ISO format
  phoneNumber: string | null; // phone number or null if not available
};
