import { Poem } from "content-collections"
import NextLink from "next/link"
import { Box, Span, Text } from "@chakra-ui/react"
import { TbExplicitFilled } from "react-icons/tb";
import { format } from "date-fns";
import { hu } from "date-fns/locale";


type Props = {
    poem: Poem;
}




export default function PoemItem({ poem }: Props) {
    const formattedDate = format(poem.written_at, "yyyy MMM d", { locale: hu });

    return (
        <Box
            _hover={{ border: "2px solid rgb(246, 248, 237)" }}
            bgColor="rgb(255, 255, 255)"
            m="17px"
            p="20px"
            minW="min-content"
            borderRadius="24%/50%"
        >
            <NextLink href={"/poem/" + poem._meta.path}>
                <Text >
                    {poem.title} 
                </Text>
              {/*       {poem.explicit_words &&
                        <TbExplicitFilled />
                    } */}
                <Text
                    mt = "3px"
                    fontSize = "0.7em"
                >{formattedDate}</Text>
            </NextLink>
        </Box>
    )
}
