import { allPoems, Poem } from "content-collections";


export const poemsByMonth: [Date, Poem[]][] = generateMonthDates().map(
    (month) => [month, poemsFromMonth(month)]
)


export function generateMonthDates(startYear = 2019): Date[] {
    const result: Date[] = [];

    const now = new Date();
    const current = new Date(startYear, 0);

    while (current <= now) {

        // result.push(`${year} ${monthName}`);
        result.push(new Date(current));

        // NOTE: handles next year, in case of 12 + 1
        current.setMonth(current.getMonth() + 1);
    }

    return result;
}


export function dateToRepr(date: Date, form: "short"|"long" = "long") {
    const year = date.getFullYear();

    const monthName = date.toLocaleString("hu-HU", {
        month: form,
    });

    return `${year} ${monthName}`
}

export function poemsFromMonth(monthDate: Date): Poem[] {
    return allPoems
        .filter((poem) => {
            // If `date` is a string, convert to Date
            return (poem.written_at.getMonth() === monthDate.getMonth()) &&
                (poem.written_at.getFullYear() === monthDate.getFullYear())
        })
}
