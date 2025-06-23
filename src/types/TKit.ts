import type { TForm } from "./TForm"
import type { TIsoDate } from "./TIsoDate";
import type { TUser } from "./TUser"

export type TKit = {
    title: string,
    description: string,
    categories: string[],
    forms: TForm[],
    author: TUser,
    createdAt: TIsoDate,
    image?: string,
}