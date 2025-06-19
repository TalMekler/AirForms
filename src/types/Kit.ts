import type { TForm } from "./TForm"
import type { TUser } from "./TUser"

export type TKit = {
    title: string,
    description: string,
    forms: TForm[]
    author: TUser
}