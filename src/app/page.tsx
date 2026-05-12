// import styles from "./page.module.css";
import { Heading, Link as ChakraLink, VStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { TagMarquee } from "./tag-marquee";


export default function Home() {
  return (
    <VStack gap={3} mt={10}>
        <Text>Verseim mélyen összefonódtak belső világommal.</Text>

        {/* <h1>Poetic Fireball</h1> */}
        <TagMarquee py={5}/>
        {/* <Heading size="2xl" mt={6} mb={10}>Korszakok</Heading>

        <ChakraLink asChild letterSpacing={2}>
          <NextLink href="/era/the-lost-five-hundred">Az Elveszett Ötszázak</NextLink>
        </ChakraLink>
        <ChakraLink asChild letterSpacing={2}>
          <NextLink href="/era/within-awareness">Tudatom Közelében</NextLink>
        </ChakraLink> */}

        <Heading size="2xl" my={6}>Felfedező</Heading>

        <ChakraLink asChild letterSpacing={2}>
          <NextLink href="/by-month">Havi</NextLink>
        </ChakraLink>
        <ChakraLink asChild letterSpacing={2}>
          <NextLink href="/by-tags">Cimkék</NextLink>
        </ChakraLink>
    </VStack>
  );
}
