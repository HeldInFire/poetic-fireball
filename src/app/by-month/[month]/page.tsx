import { Heading, Text, VStack } from "@chakra-ui/react"
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
    
    poems.sort((a, b) => b.written_at.getTime() - a.written_at.getTime())


    return (
        <VStack>
        <Heading mb={5}>{dateToRepr(monthDate)}</Heading>

        {poems.map(
            (poem) => (
                <PoemItem poem={poem}/>
            )
        )}
        </VStack>
    );
}


export async function generateStaticParams() {
    return generateMonthDates().map(
        (date) => ({
            month: serializeToLink(date)
        })
    )
}
