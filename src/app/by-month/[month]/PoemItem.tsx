import { Poem } from "content-collections"
import NextLink from "next/link"
import { Span, Text } from "@chakra-ui/react"


type Props = {
    poem: Poem;
}




export default function PoemItem({ poem }: Props) {
    // const formattedDate = format(poem.written_at, "yyyy MM d", { locale: hu });

    return (
        <NextLink href={"/poem/" + poem._meta.path}>
            <Text textAlign="left" letterSpacing={1.2}>{poem.title} <Span opacity={0.2}> - {poem.written_at.getDay() + 1}.</Span></Text>
        </NextLink>
    )
}
