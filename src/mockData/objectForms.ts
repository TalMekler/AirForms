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


export const kitForm1: TKit = {
    title: "קצר",
    description: "תיאור.",
    categories: ["קצר"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-01-01T08:00:00Z",
};

export const kitForm2: TKit = {
    title: "ערכת טפסים רפואיים",
    description: "מסמכים רפואיים למרפאות ובתי חולים.",
    categories: ["רפואה", "בריאות", "טפסים"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-02-10T10:30:00Z",
};

export const kitForm3: TKit = {
    title: "ערכת טפסים חינוכיים עם שם ממש ממש ממש ארוך שיכול לשבור את הקארד אם לא מוגדר נכון",
    description: "טפסים למורים, תלמידים ובתי ספר.",
    categories: ["חינוך", "למידה", "בית ספר"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-03-15T09:45:00Z",
};

export const kitForm4: TKit = {
    title: "משפטיים",
    description: "ערכת תבניות משפטיות לעורכי דין הכוללת חוזים, הסכמים, כתבי תביעה, מכתבי ייפוי כוח ועוד הרבה מסמכים חשובים שחייבים להיות בצורה מסודרת ונגישה – במיוחד כשמדובר במערכות משפט או גופים רשמיים שדורשים פורמט אחיד ומדויק.",
    categories: ["משפט", "חוזים", "טפסים"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-04-20T14:15:00Z",
};

export const kitForm5: TKit = {
    title: "ערכת טפסים לסטודנטים",
    description: "",
    categories: [],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-05-05T11:00:00Z",
};

export const kitForm6: TKit = {
    title: "טכניים",
    description: "טפסים לתיעוד טכני.",
    categories: ["טכני"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-06-18T13:30:00Z",
};

export const kitForm7: TKit = {
    title: "ערכת טפסים פיננסיים",
    description: "חשבוניות, קבלות ודוחות כספיים.",
    categories: ["כספים", "פיננסים", "חשבונאות"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-07-12T16:20:00Z",
};

export const kitForm8: TKit = {
    title: "ערכת עמותות",
    description: "כלים ניהוליים לארגונים ללא מטרת רווח.",
    categories: ["עמותה", "ניהול"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-08-22T10:10:00Z",
};

export const kitForm9: TKit = {
    title: "ערכת לוגיסטיקה",
    description: "טפסים לניהול מלאי, שילוח, קבלה, אחסון, מעקב מחסן והפקת דוחות תפעוליים – כל מה שצריך לארגון לוגיסטי או עסק.",
    categories: ["לוגיסטיקה", "מלאי", "שילוח", "דוחות", "מעקב", "ניהול"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-09-01T07:55:00Z",
};

export const kitForm10: TKit = {
    title: "דוגמה רגילה",
    description: "ערכת טפסים לדוגמא המכילה מספר טפסים שונים לשימוש.",
    categories: ["דוגמאות", "טפסים", "ערכת טפסים"],
    forms: objectForm,
    author: objectForm[0].author,
    createdAt: "2023-10-01T12:00:00Z",
};


export const allMockKits = [
    kitForm1, kitForm2, kitForm3, kitForm4, kitForm5,
    kitForm6, kitForm7, kitForm8, kitForm9, kitForm10,
];
