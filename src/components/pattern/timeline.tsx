
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineItem, TimelineRoot, TimelineTitle } from "@/components/ui/timeline";
import { Box, Stack, Text, Timeline, Link as ChakraLink, } from "@chakra-ui/react"
import { format } from "date-fns";
import { hu } from 'date-fns/locale';
import NextLink from "next/link";
import { Poem } from "content-collections";
import { TbExplicitFilled } from "react-icons/tb";


type Props = {
    poems: Poem[];
    mr?: string | number;
};

export default function ChakraTimeline({ poems, mr }: Props) {
    return (
        <TimelineRoot size="lg" variant="outline" mr={mr}>
            {poems.map((poem, index) => (
                <TimelineItem key={poem._meta.path} minH="50px">
                    <TimelineContent flex="1" textAlign="right">
                        <TimelineDescription whiteSpace="nowrap" pt={1}>
                            {format(poem.written_at, "yyyy MMM d", { locale: hu })}
                        </TimelineDescription>
                    </TimelineContent>
                    <TimelineConnector>
                        { poems.length - index}
                    </TimelineConnector>
                    <TimelineContent flex="1">
                        <TimelineTitle lineHeight="1.3">
                            <ChakraLink asChild>
                                <NextLink href={"/poem/" + poem._meta.path}>
                                    {poem.title}
                                </NextLink>
                            </ChakraLink>
                            {poem.explicit_words &&
                                <TbExplicitFilled />
                            }
                        </TimelineTitle>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </TimelineRoot>
    )
}
