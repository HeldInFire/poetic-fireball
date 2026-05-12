import { Heading, VStack, Text, HStack, Tag } from "@chakra-ui/react";
import { allPoems } from "content-collections";
import { notFound } from "next/navigation";
import { Literata } from "next/font/google";
import { format } from "date-fns/format";
import { hu } from "date-fns/locale";
import NextLink from "next/link"
import { gen_tag_url } from "@/model/tags";
import PoemTag from "@/components/pattern/poem-tag";



type Props = {
    params: Promise<{ era: string, id: string }>;
    // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const literata = Literata({
    // subsets: ['latin'],
    variable: '--font-literata',
    // display: 'swap',
})

export default async function PoemPage({ params }: Props) {
    const { era, id } = await params;
    // const { think } = await searchParams;
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
                mb={4} mt={8}
                fontSize="clamp(1.75rem, 3vw, 2.4rem)"
            >
                {poem.title}
            </Heading>

            <HStack mb={10}>
                {/* { think == "tags"} && */}
                {poem.think_tags?.map(
                    (tag) => (
                        <PoemTag tag={tag} key={tag}/>
                    )
                )}
            </HStack>

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
                {/* TODO: add link to month view, if clicking on month */}
            </Text>



        </VStack>
    )
}


export async function generateStaticParams() {
    const poems = allPoems; // your data source

    return poems.map((poem) => ({
        era: poem._meta.path.split('/')[0],
        id: poem._meta.path.split('/')[1],
    }));
}
