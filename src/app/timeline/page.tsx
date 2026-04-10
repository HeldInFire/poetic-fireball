import { allPoems } from "content-collections";
import ChakraTimeline from "./timeline";
import { Heading, VStack } from "@chakra-ui/react";

const sortedPoems = allPoems
                        .sort((a, b) => {
                            // If `date` is a string, convert to Date
                            return new Date(a.written_at).getTime() - new Date(b.written_at).getTime();
                        })
                        .map(poem => ({
                                title: poem.title,
                                id: poem._meta.path,
                                written_at: poem.written_at
                        }));


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
