"use client"

import { Box, Card, useBreakpointValue } from "@chakra-ui/react";
import { dateToRepr, serializeToLink } from "./poems-from-month";
import Link from "next/link";
import { Poem } from "content-collections";
import TagList from "./TagList";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Card.Root> & {
    monthDate: Date;
    poems: Poem[];
}

export default function MonthCard({ monthDate, poems, ...cardProps }: Props) {

    const numberOfPoems = poems.length;

    const router = useRouter();

    const form: "short" | "long" =
        useBreakpointValue({
            base: "short",
            lg: "long",
        }) ?? "long";

    const path = `/by-month/${serializeToLink(monthDate)}`;

    return (
        <Card.Root minW="10em" {...cardProps}
            // flex="1, 0, 1"
            onClick={() => router.push(path)}
        >
            <Card.Body gap="2">
                <Card.Title mt="2">{dateToRepr(monthDate, form)}</Card.Title>
                <Card.Description>
                    {numberOfPoems} vers
                </Card.Description>
                <TagList poems={poems}
                    mt={2}
                    maxW="15em"
                />
            </Card.Body>
        </Card.Root>
    );
}
