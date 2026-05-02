"use client"

import { allPoems } from "content-collections";
import ChakraTimeline from "./timeline";
import { Heading, Input, VStack } from "@chakra-ui/react";
import { sortedPoems } from "./sorted";
import { useState } from "react";



export default function WithinAwarenessPage() {
    const [searchPrefix, setSearchPrefix] = useState("")

    return (
        <VStack>
            <Heading size="xl" mt={10}>Időrend</Heading>

            <Input placeholder="" variant="subtle" opacity={0.5} w={{ md: "28%", lg: "30%" }} my={4}
                onChange={(e) => {
                    setSearchPrefix(e.currentTarget.value)
                }}
            />

            <ChakraTimeline mr={2} poems={
                sortedPoems.filter((poem) =>
                    poem.title.toLowerCase().includes(searchPrefix.toLowerCase())
                )} />
        </VStack>
    )
}

// import PoemList from '@/components/era/PoemList.astro'
// import ChakraTimeline from "@/components/chakra-timeline"


//     <ChakraTimeline poems={sortedPoems}/>
//     <!-- <PoemList poems={sortedPoems} /> -->
