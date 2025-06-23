import { Box, Chip, Stack, type BoxProps, type StackProps } from "@mui/material";
import { type ComponentProps, type PropsWithChildren, type ReactNode } from "react";
import { KitCardContext, useKitCardContext } from "../../context/KitCardContext";
import type { TKit } from "../../types/TKit";
import EllipsisText from "../EllipsisText/EllipsisText";

type KitCardProps = {
    kit: TKit;
};

const KitCard = ({ children, kit, ...stackProps }: PropsWithChildren<KitCardProps> & Omit<StackProps, "children">) => {
    return (
        <KitCardContext.Provider value={kit}>
            <Stack {...stackProps}>{children}</Stack>
        </KitCardContext.Provider>
    );
};

export default KitCard;

KitCard.Title = ({ ...props }: Omit<ComponentProps<typeof EllipsisText>, "text">) => {
    const { title } = useKitCardContext();
    return <EllipsisText {...props} text={title} />;
};

type KitCardCategoriesProps = {
    renderItem?: (category: string) => ReactNode;
    maxItemsToRender?: number;
};

KitCard.Categories = ({ renderItem, maxItemsToRender }: KitCardCategoriesProps) => {
    if (maxItemsToRender && maxItemsToRender < 1) throw new Error("maxItemsToRender must be at least 1");

    const { categories } = useKitCardContext();
    const limitedCategories = maxItemsToRender ? categories.slice(0, maxItemsToRender) : categories;
    const diff = categories.length - (maxItemsToRender ?? categories.length);

    return limitedCategories.length > 0 ? (
        renderItem ? (
            <>
                {limitedCategories.map((category) => renderItem(category))}
                {diff > 0 && renderItem(`+${diff}`)}
            </>
        ) : (
            limitedCategories.map((category) => <Chip label={category} />)
        )
    ) : (
        <></>
    );
};

KitCard.Image = ({ ...props }: Omit<BoxProps, "children">) => {
    const { image } = useKitCardContext();
    return (
        <Box {...props}>
            <img src={image} style={{ width: "100%", height: "100%" }} />
        </Box>
    );
};


