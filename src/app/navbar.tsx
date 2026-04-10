import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { Story_Script, Inter } from "next/font/google"
import { ColorModeButton } from "@/components/ui/color-mode";


const storyScript = Story_Script({
    weight: "400",
})

const inter = Inter({
    weight: "400",
})


export default function Navbar() {
    return (
        <VStack py={4}>
            <Flex
                fontSize="lg" color="grey/60"
                gap={10} justifyContent="center" className={storyScript.className}>
                <ChakraLink asChild>
                    <NextLink href="/">Előszó</NextLink>
                </ChakraLink>
                <Text fontFamily={inter.className} >^•*</Text>
                <ChakraLink asChild>
                    <NextLink href="/timeline">Időrend</NextLink>
                </ChakraLink>
            </Flex>
            <ColorModeButton variant="ghost" opacity={0.1} pr={3}/>
        </VStack>
    )
}
