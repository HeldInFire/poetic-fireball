import { allPoems } from "content-collections";

export const sortedPoems = allPoems
                        .sort((a, b) => {
                            // If `date` is a string, convert to Date
                            return new Date(a.written_at).getTime() - new Date(b.written_at).getTime();
                        })