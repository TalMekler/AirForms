import { createContext, useContext } from "react";
import type { TKit } from "../types/TKit";

const KitCardContext = createContext<TKit | undefined>(undefined);

const useKitCardContext = () => {
    const context = useContext(KitCardContext);
    if (!context) {
        throw new Error("KitCardContext must be used within a <KitCard kit={...}>");
    }
    return context;
};

export { KitCardContext, useKitCardContext };
