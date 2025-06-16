import type { TForm } from "../types/TForm";

const form: TForm = {
  id: "form-1",
  title: "Sample Form",
  description: "This is a sample form for demonstration purposes.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: {
    id: "user-1",
    firstName: "John",
    lastName: "Doe",
    email: "asd@gmail.com",
    image: null, // URL to the user's image or null if not available
    createdAt: "2023-10-01T12:00:00Z",
    phoneNumber: null, // phone number or null if not available
  },
  image: "",
  categories: ["General", "Feedback"],
  tags: ["sample", "demo", "form"],
  expirationDate: null,
};

export const myForms: TForm[] = [form, form, form, form, form, form, form, form, form, form];
