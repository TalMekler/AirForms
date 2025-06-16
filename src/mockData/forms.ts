import type { TForm } from "../types/TForm";

export const form: TForm = {
  id: "1",
  title: "בדיקה 1",
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
    phoneNumber: "0534657876"
  },
  image: "https://picsum.photos/200",
  categories: ["לוגיסטיקה", `אכ״א`, "דחיפות"],
  tags: ["דוגמא", "דמו", "טופס"],
  expirationDate: null,
  timeToFill: "5 דק׳", // estimated time to fill the form
};

export const form2: TForm = {
  id: "2",
  title: "בדיקה 2",
  description: "השתמשו בטופס זה כדי לדווח על כל באג שאתם נתקלים בו, כולל שלבים לשחזורו.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: {
    id: "user-2",
    firstName: "מאיר",
    lastName: "פריד",
    email: "meir@gmail.com",
    image: "https://picsum.photos/200",
    createdAt: "2023-10-01T12:00:00Z",
    phoneNumber: "0532712650"
  },
  image: "https://picsum.photos/200",
  categories: ["Development", "QA"],
  tags: ["באג", "דיווח", "נושא"],
  expirationDate: null,
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form3: TForm = {
  id: "3",
  title: "בדיקה 3",
  description: "סקר קצר שיעזור לנו לשפר את חוויית הלקוח שלנו.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: {
    id: "user-3",
    firstName: "טל",
    lastName: "מקלר",
    email: "tal@gmail.com",
    image: "https://picsum.photos/200",
    createdAt: "2023-10-01T12:00:00Z",
    phoneNumber: "0534657876"
  },
  image: "https://picsum.photos/200",
  categories: ["Marketing"],
  tags: ["סקר", "מכירות", "משוב"],
  expirationDate: "2023-12-25T00:00:00Z",
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form4: TForm = {
  id: "4",
  title: "בדיקה 4",
  description: "הירשמו לאירוע הקרוב על ידי מילוי הפרטים שלכם למטה.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: {
    id: "user-4",
    firstName: "חנן",
    lastName: "אזולאי",
    email: "chanan@gmail.com",
    image: "https://picsum.photos/200",
    createdAt: "2023-10-01T12:00:00Z",
    phoneNumber: "0534657876"
  },
  image: "https://picsum.photos/200",
  categories: ["אירועים", "הרשמה"],
  tags: ["אירועים", "הרשמה", "כניסה"],
  expirationDate: null,
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form5: TForm = {
  id: "5",
  title: "בדיקה 5",
  description: "שלח את בקשת התמיכה הטכנית שלך, כולל פרטי המכשיר והבעיה.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: {
    id: "user-5",
    firstName: "ערן",
    lastName: "בולנדיאן",
    email: "eran@gmail.com",
    image: "https://picsum.photos/200",
    createdAt: "2023-10-01T12:00:00Z",
    phoneNumber: "0534657876"
  },
  image: "https://picsum.photos/200",
  categories: ["תמיכה", "שיתוף"],
  tags: ["תמיכה", "טכני", "עזרה"],
  expirationDate: "2023-12-19T00:00:00Z",
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form6: TForm = {
  id: "6",
  title: "בדיקה 6",
  description: "טופס סקירת ביצועים שנתית להערכת עובדים.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form.author },
  image: "https://picsum.photos/200",
  categories: ["HR", "סקירה"],
  tags: ["סקירה", "ביצועים", "הערכה"],
  expirationDate: "0876544567",
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form7: TForm = {
  id: "7",
  title: "בדיקה 7",
  description: "הזמינו את המוצרים הרצויים באמצעות הטופס למטה. המחירים עשויים להשתנות.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form.author },
  image: "https://picsum.photos/200",
  categories: ["מכירות", "קניות"],
  tags: ["מוצרים", "מכירה", "לרכוש"],
  expirationDate: "2023-12-13T00:00:00Z",
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form8: TForm = {
  id: "8",
  title: "בדיקה 8",
  description: "הירשמו לניוזלטר החודשי שלנו והישארו מעודכנים.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form.author },
  image: "https://picsum.photos/200",
  categories: ["מכירות", "מנוי"],
  tags: ["ניוזלטר", "דוא''ל", "הרשמה"],
  expirationDate: "0987644576",
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form9: TForm = {
  id: "9",
  title: "בדיקה 9",
  description: "רשימת בדיקה למטרות ביקורת פנימית. אנא עקבו אחר השלבים במדויק.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form.author },
  image: "https://picsum.photos/200",
  categories: ["תאימות", "ביקורת"],
  tags: ["ביקורת", "פנימית", "רשימת תיוג"],
  expirationDate: "2023-12-07T00:00:00Z",
  timeToFill: "5 דק׳", // estimated time to fill the form
};

const form10: TForm = {
  id: "10",
  title: "בדיקה 10",
  description: "הגש בקשה לחופשה על ידי בחירת סוג, משך וסיבה.",
  createdAt: "2023-10-01T12:00:00Z",
  updatedAt: "2023-10-01T12:00:00Z",
  isPublished: true,
  author: { ...form.author },
  image: "https://picsum.photos/200",
  categories: ["משאבי אנוש", "עזיבה"],
  tags: ["חופשה", "בקשה", "היעדרות"],
  expirationDate: null,
  timeToFill: "5 דק׳", // estimated time to fill the form
};


export const myForms: TForm[] = [form, form6, form7, form8, form9, form10];
