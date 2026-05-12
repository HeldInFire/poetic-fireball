import { allPoems, Poem } from "content-collections";
import { sortedPoems } from "../poems";

export const think_tags = [...new Set(
    allPoems
        .flatMap(poem => (poem.think_tags ?? []))
)]

const think_tags_by_occurences_unsorted = allPoems
    .flatMap(poem => (poem.think_tags ?? []))
    .reduce<Record<string, number>>((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

export const think_tags_by_occurences =
    Object.fromEntries(
        Object.entries(think_tags_by_occurences_unsorted)
            .sort(([, a], [, b]) => b - a)
    )

export function get_tag_occurences_of(poems: Poem[]): Record<string, number>  {
    const think_tags_by_occurences_unsorted = poems
    .flatMap(poem => (poem.think_tags ?? []))
    .reduce<Record<string, number>>((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    return Object.fromEntries(
        Object.entries(think_tags_by_occurences_unsorted)
            .sort(([, a], [, b]) => b - a)
    )
}

// -----------------------------------------------------------

export function dehun_tag(tag_name: string): string {
    return tag_name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(" ", "-");
}

export function poems_matching_tag(dehun_repr: string) {
    return sortedPoems
        .filter( poem => poem.think_tags?.map(dehun_tag).includes(dehun_repr) )
}

export function gen_tag_url(tag: string): string {
    return `/by-tags/${dehun_tag(tag)}`
}
