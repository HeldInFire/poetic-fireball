import { allPoems } from "content-collections";


export default function WithinAwarenessPage() {
    return (
        <div>
            {allPoems.map((poem) => (
                <div key={poem._meta.path}>
                    <h1>{poem.title}</h1>
                    {/* <p>{poem.written_at}</p> */}
                </div>
            ))}
        </div>
    )
}