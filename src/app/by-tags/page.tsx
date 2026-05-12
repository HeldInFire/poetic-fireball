import { HStack, Tag, Text } from "@chakra-ui/react";
import { think_tags_by_occurences, gen_tag_url, think_tags } from "@models/tags";
import NextLink from "next/link"


export default function ByTagsPage() {
    return (
        <HStack gap={4} wrap="wrap" justify="center" px={3}>
            {Object.entries(think_tags_by_occurences).map(
                ([tag, count]) => (
                    <HStack key={tag}>
                        <Tag.Root size="xl" variant="outline">
                            <Tag.Label><NextLink href={gen_tag_url(tag)}>{tag} <b>{count}</b></NextLink></Tag.Label>
                        </Tag.Root>
                    </HStack>
                )
            )}
        </HStack>
    )
}
