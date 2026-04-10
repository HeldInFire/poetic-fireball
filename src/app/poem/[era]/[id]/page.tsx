import { Heading, VStack, Text } from "@chakra-ui/react";
import { allPoems } from "content-collections";
import { notFound } from "next/navigation";
import { Literata } from "next/font/google";
import { format } from "date-fns/format";
import { hu } from "date-fns/locale";



type Props = {
    params: Promise<{ era: string, id: string }>
}

const literata = Literata({
    // subsets: ['latin'],
    variable: '--font-literata',
    // display: 'swap',
})

export default async function PoemPage({ params }: Props) {
    const { era, id } = await params;
    const poem = allPoems.find(p => p._meta.path === `${era}/${id}`);

    if (!poem) {
        notFound(); 
    }

    const formattedDate = format(poem.written_at, "yyyy MMMM d", { locale: hu });

    return (
        <VStack>
            <Heading 
                fontWeight="600" 
                lineHeight="1.25" 
                letterSpacing="0.01em" 
                mb={10} mt={8}
                fontSize="clamp(1.75rem, 3vw, 2.4rem)"
            >
                {poem.title}
            </Heading>
            {/* <PoemContent poem={poem} /> */}
            <Text
                whiteSpace="pre-wrap"
                lineHeight="1.65"
                letterSpacing="0.02em"
                fontWeight="400"
                className={literata.className}
                mb={10}
                mx={2}
                >
                {poem.content}
            </Text>

            <Text mb="1.5rem" 
                textAlign="left"
                color="#777"
                fontSize="0.875rem"
            >
                {formattedDate}
            </Text>


        </VStack>
    )
}
