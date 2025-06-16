import type { TForm } from "../types/TForm";

export const form: TForm = {
  id: "form-1",
  title: "Sample Form",
  description: "לורם איפסום דולור סיט אמט, קונסקטורר לורם איפסום דולור סיט אמט, קונסקטורר ",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: {
    id: "user-1",
    firstName: "טל",
    lastName: "מקלר",
    email: "asd@gmail.com",
    image: "https://picsum.photos/200", // URL to the user's image or null if not available
    createdAt: "2023-10-01T12:00:00Z",
    phoneNumber: null, // phone number or null if not available
  },
  image: "https://picsum.photos/200",
  categories: ["לוגיסטיקה", `אכ״א`, "דחיפות"],
  tags: ["sample", "demo", "form"],
  expirationDate: null,
  timeToFill: "5 דקות", // estimated time to fill the form
};

export const myForms: TForm[] = [form, form, form, form, form, form, form, form, form, form];
