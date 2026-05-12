import PoemTag from "@/components/pattern/poem-tag";
import { get_tag_occurences_of } from "@/model/tags";
import { Wrap } from "@chakra-ui/react";
import { Poem } from "content-collections";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Wrap> & {
    poems: Poem[];
}

const TagList = ({poems, ...wrapProps}: Props) => {
    const tags = get_tag_occurences_of(poems);

    return (
        <Wrap {...wrapProps}>
            {Object.entries(tags).map(
                ([tag_name, _count]) => (<PoemTag tag={tag_name} key={tag_name}/>)
        )}
        </Wrap>
    )
};

export default TagList;
