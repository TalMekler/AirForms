import type { TForm } from "../types/TForm";

const form1: TForm = {
  id: "form-1",
  title: "Employee Feedback",
  description: "Please provide your feedback about the workplace. Your opinion is valuable.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: {
    id: "user-1",
    firstName: "John",
    lastName: "Doe",
    email: "asd@gmail.com",
    image: null,
    createdAt: "2023-10-01T12:00:00Z",
    phoneNumber: null
  },
  image: "",
  categories: ["HR", "Feedback"],
  tags: ["employee", "feedback", "workplace"],
  expirationDate: "2023-12-31T00:00:00Z"
};

const form2: TForm = {
  id: "form-2",
  title: "Bug Report Form",
  description: "Use this form to report any bugs you encounter, including steps to reproduce them.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["Development", "QA"],
  tags: ["bug", "report", "issue"],
  expirationDate: null
};

const form3: TForm = {
  id: "form-3",
  title: "Customer Survey",
  description: "A short survey to help us improve our customer experience.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["Marketing"],
  tags: ["survey", "customer", "feedback"],
  expirationDate: "2023-12-25T00:00:00Z"
};

const form4: TForm = {
  id: "form-4",
  title: "Event Registration",
  description: "Register for the upcoming event by filling in your details below.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["Events"],
  tags: ["event", "registration", "signup"],
  expirationDate: null
};

const form5: TForm = {
  id: "form-5",
  title: "Technical Support Request",
  description: "Submit your technical support request including device details and issue.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["IT", "Support"],
  tags: ["support", "technical", "help"],
  expirationDate: "2023-12-19T00:00:00Z"
};

const form6: TForm = {
  id: "form-6",
  title: "Performance Review",
  description: "Annual performance review form for employee evaluation.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["HR", "Review"],
  tags: ["review", "performance", "evaluation"],
  expirationDate: null
};

const form7: TForm = {
  id: "form-7",
  title: "Product Order Form",
  description: "Order your desired products using the form below. Prices may vary.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["Sales", "Orders"],
  tags: ["product", "order", "purchase"],
  expirationDate: "2023-12-13T00:00:00Z"
};

const form8: TForm = {
  id: "form-8",
  title: "Newsletter Signup",
  description: "Sign up for our monthly newsletter and stay updated.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["Marketing", "Subscription"],
  tags: ["newsletter", "email", "subscription"],
  expirationDate: null
};

const form9: TForm = {
  id: "form-9",
  title: "Internal Audit Checklist",
  description: "Checklist for internal auditing purposes. Please follow steps precisely.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["Compliance", "Audit"],
  tags: ["audit", "internal", "checklist"],
  expirationDate: "2023-12-07T00:00:00Z"
};

const form10: TForm = {
  id: "form-10",
  title: "Leave Application",
  description: "Apply for leave by selecting type, duration, and reason.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form1.author },
  image: "",
  categories: ["HR", "Leave"],
  tags: ["leave", "application", "absence"],
  expirationDate: null
};


export const myForms: TForm[] = [form1, form2, form3, form4, form5, form6, form7, form8, form9, form10];
