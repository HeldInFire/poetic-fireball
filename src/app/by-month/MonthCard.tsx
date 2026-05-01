"use client"

import { Card, useBreakpointValue } from "@chakra-ui/react";
import { dateToRepr } from "./poems-from-month";


type Props = {
    monthDate: Date;
    numberOfPoems: number;
}

export default function MonthCard({ monthDate, numberOfPoems }: Props) {
    const form: "short" | "long" =
        useBreakpointValue({
            base: "short",
            lg: "long",
        }) ?? "long";

    return (
        <Card.Root h="8em">
            <Card.Body gap="2">
                <Card.Title mt="2">{dateToRepr(monthDate, form)}</Card.Title>
                <Card.Description>
                    {numberOfPoems} vers
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}
