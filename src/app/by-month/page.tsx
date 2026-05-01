import { Box, Card, Center, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { poemsByMonth } from "./poems-from-month";
import { Poem } from "content-collections";
import MonthCard from "./MonthCard";
import { Switch } from "@/components/ui/switch";
import { TiSpiral } from "react-icons/ti";
import { FaHourglassHalf } from "react-icons/fa";
import { PiHourglassSimpleThin, PiSpiralThin } from "react-icons/pi";
import { IoIosFlame } from "react-icons/io";

export default function ByMonth() {
    const poems = poemsByMonth
        .filter(
            ([_, poems]) => poems.length !== 0
        )

    return (<>
        <Center>
            <HStack>
                <Text opacity={0.2} letterSpacing="wider">Kronológiai</Text>
                <Switch label="Inspiration Lens"
                    size="lg"
                    my={6}
                    // variant={}
                    thumbLabel={{ "on": <IoIosFlame />, "off": <FaHourglassHalf color="black" /> }}
                    trackLabel={{ "off": <PiSpiralThin />, "on": <PiHourglassSimpleThin color="white" /> }}
                />
                <Text opacity={0.2} letterSpacing="wider">Inspirációs</Text>
            </HStack>
        </Center>

        <HStack wrap="wrap" mx={8} justify="center">
            {poems
                .map(
                    ([month, poems]: [Date, Poem[]]) => <MonthCard key={month.toDateString()} monthDate={month} numberOfPoems={poems.length} />
                )}
        </HStack>
    </>);
}
