"use client"


import { Box, Card, Center, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { poemsByMonth } from "./poems-from-month";
import { Poem } from "content-collections";
import MonthCard from "./MonthCard";
import { Switch } from "@/components/ui/switch";
import { TiSpiral } from "react-icons/ti";
import { FaHourglassHalf } from "react-icons/fa";
import { PiHourglassSimpleThin, PiSpiralThin } from "react-icons/pi";
import { IoIosFlame } from "react-icons/io";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function ByMonth() {
    const [inspirationalLens, setInspirationalLens] = useLocalStorageState('month-page/inspirational-lens', {
        defaultValue: true
    })


    const poems = poemsByMonth.filter(
        ([_, poems]) => poems.length !== 0
    )

    const poems_shining_through = inspirationalLens
        ? [...poems].sort((a, b) => b[1].length - a[1].length) // descending
        : [...poems].reverse();

    return (<>
        <Center>
            <HStack>
                <Text opacity={0.2} letterSpacing="wider">Kronológiai</Text>
                <Switch label="Inspiration Lens"
                    size="lg"
                    my={6}
                    // variant={}
                    onCheckedChange={(e) => setInspirationalLens(e.checked)}
                    checked={inspirationalLens}
                    thumbLabel={{ "on": <IoIosFlame />, "off": <FaHourglassHalf color="black" /> }}
                    trackLabel={{ "off": <PiSpiralThin />, "on": <PiHourglassSimpleThin color="white" /> }}
                />
                <Text opacity={0.2} letterSpacing="wider">Inspirációs</Text>
            </HStack>
        </Center>

        <HStack wrap="wrap" align="stretch" mx={8} justify="center" mb={10}>
            {poems_shining_through
                .map(
                    ([month, poems]: [Date, Poem[]]) => <MonthCard key={month.toDateString()} monthDate={month} poems={poems} />
                )}
        </HStack>
    </>);
}
