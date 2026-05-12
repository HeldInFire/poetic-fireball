import { think_tags } from "@/model/tags";
import { Marquee, Tag } from "@chakra-ui/react";
import { ComponentProps, PropsWithoutRef } from "react";


type Props = ComponentProps<typeof Marquee.Root>

export const TagMarquee = (props: Props) => (
    <Marquee.Root reverse autoFill pauseOnInteraction={true} {...props}>
        <Marquee.Edge side="start" />
        <Marquee.Viewport>
            <Marquee.Content>
                {think_tags.map((tag) => (
                    <Marquee.Item key={tag}>
                        <Tag.Root size="lg" variant="outline">
                            <Tag.Label>{tag}</Tag.Label>
                        </Tag.Root>
                    </Marquee.Item>
                ))}
            </Marquee.Content>
        </Marquee.Viewport>
        <Marquee.Edge side="end" />
    </Marquee.Root>
)
