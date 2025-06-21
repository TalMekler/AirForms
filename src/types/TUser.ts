import type { TId } from "./TId";
import type { TIsoDate } from "./TIsoDate";

export type TUser = {
  id: TId;
  firstName: string;
  lastName: string;
  email: string;
  image: string | null; // URL to the user's image or null if not available
  createdAt: TIsoDate;
  phoneNumber: string | null; // phone number or null if not available
};
