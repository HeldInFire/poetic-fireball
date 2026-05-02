import { Center, Heading, Text, VStack } from "@chakra-ui/react"
import { dateToRepr, deserializeFromLink, generateMonthDates, poemsFromMonth, serializeToLink } from "../poems-from-month";
import Link from "next/link";
import PoemItem from "./PoemItem";


type Props = {
    params: Promise<{ month: string }>
}


export default async function ByMonthPoemList({ params }: Props) {
    const { month } = await params;
    const monthDate = deserializeFromLink(month)
    const poems = poemsFromMonth(monthDate)

    poems.sort((a, b) => a.written_at.getDay() - b.written_at.getDay())


    return (
        <Center>
            <VStack gap={5} mb={10}
                align="stretch" mx="auto"
            >
                <Heading mb={5}>{dateToRepr(monthDate)}</Heading>

                {poems.map(
                    (poem) => (
                        <PoemItem poem={poem} />
                    )
                )}
            </VStack>
        </Center>
    );
}


export async function generateStaticParams() {
    return generateMonthDates().map(
        (date) => ({
            month: serializeToLink(date)
        })
    )
}
