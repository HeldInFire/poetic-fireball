import PoemTag from "@components/pattern/poem-tag";
import { HStack, Tag, Text } from "@chakra-ui/react";
import { think_tags_by_occurences, gen_tag_url, think_tags } from "@models/tags";
import NextLink from "next/link"


export default function ByTagsPage() {
    return (
        <HStack gap={4} wrap="wrap" justify="center" px={3}>
            {Object.entries(think_tags_by_occurences).map(
                ([tag, count]) => (
                    <PoemTag tag={tag} size="xl" key={tag} postComponent={
                        <b> {count}</b>
                    }/>
                )
            )}
        </HStack>
    )
}
