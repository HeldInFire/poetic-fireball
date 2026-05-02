import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import shattered from "./img/shattered/shattered/shattered_@2X.png"


type Props = PropsWithChildren;


export default function BgImage({ children }: Props) {
    return (
        <Box backgroundImage={`url(${shattered})`}
            minH="100vh"
        >
            {children}
        </Box>
    );
}
