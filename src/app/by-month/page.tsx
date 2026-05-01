import { Box, Card, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { poemsByMonth } from "./poems-from-month";
import { Poem } from "content-collections";
import MonthCard from "./MonthCard";

export default function ByMonth() {

    return (<>
        <HStack wrap="wrap" mx={8} justify="center">
            {poemsByMonth
                .filter(
                    ([_, poems]) => poems.length !== 0
                ).map(
                    ([month, poems]: [Date, Poem[]]) => <MonthCard key={month.toDateString()} monthDate={month} numberOfPoems={poems.length} />
                )}
        </HStack>
    </>);
}
