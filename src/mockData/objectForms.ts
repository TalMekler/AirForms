import type { TForm } from "../types/TForm";
import type { TKit } from "../types/TKit";

export const objectForm: TForm[] = [
    {
        id: "1",
        title: "1111111111111111111111בדיקה ",
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
        id: "6",
        title: "בדיקה 6",
        description: "טופס סקירת ביצועים שנתית להערכת עובדים.",
        createdAt: "2023-10-01T12:00:00Z",
        updatedAt: "2023-10-01T12:00:00Z",
        isPublished: true,
        author: {
            id: "user-5",
            firstName: "שוקי",
            lastName: "לוי",
            email: "shuki@gmail.com",
            image: "https://picsum.photos/200",
            createdAt: "2023-10-01T12:00:00Z",
            phoneNumber: "0534657876"
        },
        image: "https://picsum.photos/200",
        categories: ["HR", "סקירה"],
        tags: ["סקירה", "ביצועים", "הערכה"],
        expirationDate: "2023-12-19T00:00:00Z",
        timeToFill: "5 דק׳",
    }
];


export const kitForm: TKit = {
    title: "ערכת טפסים לדוגמא",
    description: "ערכת טפסים לדוגמא המכילה מספר טפסים שונים לשימוש.",
    categories: ["דוגמאות", "טפסים", "ערכת טפסים"],
    forms: objectForm, // Array of forms included in the kit
    author: objectForm[0].author,
    createdAt: "2023-10-01T12:00:00Z",
    image: "https://picsum.photos/200",
}