
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineItem, TimelineRoot, TimelineTitle } from "@/components/ui/timeline";
import { Box, Stack, Text, Timeline, Link as ChakraLink, } from "@chakra-ui/react"
import { format } from "date-fns";
import { hu } from 'date-fns/locale';
import NextLink from "next/link";
import { Poem } from "content-collections";


type Props = {
    poems: Poem[];
};

export default function ChakraTimeline({ poems }: Props) {
    return (
        <TimelineRoot size="lg" variant="outline">
            {poems.map((poem, index) => (
                <TimelineItem key={poem._meta.path} minH="50px">
                    <TimelineContent flex="1" textAlign="right">
                        <TimelineDescription whiteSpace="nowrap" pt={1}>
                            {format(poem.written_at, "yyyy MMM d", { locale: hu })}
                        </TimelineDescription>
                    </TimelineContent>
                    <TimelineConnector>
                        {index}
                    </TimelineConnector>
                    <TimelineContent flex="1">
                        <TimelineTitle lineHeight="1.3">
                            <ChakraLink asChild>
                                <NextLink href={"/poem/" + poem._meta.path}>
                                    {poem.title}
                                </NextLink>
                            </ChakraLink>
                        </TimelineTitle>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </TimelineRoot>
    )
}
