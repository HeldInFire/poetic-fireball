import { allPoems } from "content-collections";
import ChakraTimeline from "./timeline";
import { Heading, VStack } from "@chakra-ui/react";
import { sortedPoems } from "./sorted";



export default function WithinAwarenessPage() {

    return (
        <VStack>
            <Heading size="xl" my={10}>Időrend</Heading>
            <ChakraTimeline poems={sortedPoems}/>
        </VStack>
    )
}

// import PoemList from '@/components/era/PoemList.astro'
// import ChakraTimeline from "@/components/chakra-timeline"


//     <ChakraTimeline poems={sortedPoems}/>
//     <!-- <PoemList poems={sortedPoems} /> -->
