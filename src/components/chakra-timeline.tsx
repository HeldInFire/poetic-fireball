
import { Provider } from "@/components/ui/provider"
import { withBase } from "@/utils/base";
import { Box, Stack, Text, Timeline } from "@chakra-ui/react"
import { format } from "date-fns";
import { hu } from 'date-fns/locale';

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
        <Provider>
            <Stack gap="8">
                <Timeline.Root size="lg">
                    {poems.map((poem, index) => (
                        <Timeline.Item>
                            <Box>
                                <Timeline.Content minW="clamp(120px, 18vw, 150px)"
                                    textAlign="right"
                                    justifySelf="end"
                                // display="flex"
                                // justifyContent="flex-end"
                                >
                                    <Timeline.Title
                                        textAlign="right"
                                        mx="auto"
                                        whiteSpace="nowrap">{format(poem.written_at, "yyyy MMM d", { locale: hu })}</Timeline.Title>
                                </Timeline.Content>
                            </Box>
                            <Timeline.Connector>
                                <Timeline.Separator />
                                <Timeline.Indicator>
                                    {index}
                                </Timeline.Indicator>
                            </Timeline.Connector>
                            <Timeline.Content>
                                <Timeline.Title lineHeight="1.3">
                                    <a href={withBase("/poem/" + poem.id)}>
                                        {poem.title}
                                    </a>
                                </Timeline.Title>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))}
                </Timeline.Root>
            </Stack>
        </Provider>
    )
}
