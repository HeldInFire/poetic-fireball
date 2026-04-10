
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineItem, TimelineRoot, TimelineTitle } from "@/components/ui/timeline";
import { Box, Stack, Text, Timeline, Link as ChakraLink, } from "@chakra-ui/react"
import { format } from "date-fns";
import { hu } from 'date-fns/locale';
import NextLink from "next/link";

type PoemEntry = {
    title: string;
    written_at: Date;
    id: string;
};

type Props = {
    poems: PoemEntry[];
};

export default function ChakraTimeline({ poems }: Props) {
    return (
        <TimelineRoot size="lg" variant="outline">
            {poems.map((poem, index) => (
                <TimelineItem key={poem.id} minH="50px">
                    <TimelineContent flex="1" textAlign="right">
                        <TimelineDescription whiteSpace="nowrap">
                            {format(poem.written_at, "yyyy MMM d", { locale: hu })}
                        </TimelineDescription>
                    </TimelineContent>
                    <TimelineConnector>
                        {index}
                    </TimelineConnector>
                    <TimelineContent flex="1">
                        <TimelineTitle lineHeight="1.3">
                            <ChakraLink asChild>
                                <NextLink href={"/poem/" + poem.id}>
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
