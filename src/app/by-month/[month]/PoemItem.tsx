import { Poem } from "content-collections"
import { format } from "date-fns";
import { hu } from "date-fns/locale";
import NextLink from "next/link"
import { Text } from "@chakra-ui/react"


type Props = {
    poem: Poem;
}




export default function PoemItem({ poem }: Props) {
    // const formattedDate = format(poem.written_at, "yyyy MM d", { locale: hu });

    return (
        <NextLink href={"/poem/" + poem._meta.path}>
            {poem.title}
            - {poem.written_at.getDay()}.
        </NextLink>
    )
}
