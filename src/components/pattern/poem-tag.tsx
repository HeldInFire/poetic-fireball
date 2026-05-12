import { gen_tag_url } from "@models/tags";
import { Tag } from "@chakra-ui/react";
import NextLink from "next/link"
import { ComponentProps, ReactElement } from "react";


type Props = ComponentProps<typeof Tag.Root> & {
    tag: string;
    postComponent?: ReactElement;
}


export default function PoemTag({postComponent, tag, ...tagProps}: Props) {
    return (
        <Tag.Root {...tagProps} variant="outline">
            <Tag.Label><NextLink href={gen_tag_url(tag)}>{tag}{postComponent}</NextLink></Tag.Label>
        </Tag.Root>
    )
}