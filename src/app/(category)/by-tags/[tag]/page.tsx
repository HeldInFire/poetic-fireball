import ChakraTimeline from "@/components/pattern/timeline";
import { dehun_tag, poems_matching_tag, think_tags } from "@models/tags";

type Props = {
    params: Promise<{ tag: string }>;
    // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function TagPage({ params }: Props) {
    const { tag } = await params;
    const poems = poems_matching_tag(tag)

    return (
            <ChakraTimeline mr={2} poems={poems} />
    )
}

export async function generateStaticParams() {
    return think_tags.map((tag_name) => ({
        tag: dehun_tag(tag_name)
    }));
}
