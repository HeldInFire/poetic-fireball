import { Box } from "@chakra-ui/react";

export default function TimelineLayout({ children }: { children: React.ReactNode }) {

    return (
        <Box maxW="container.xl" mx="auto" px={4} >
            {children}
        </Box>
    )
}