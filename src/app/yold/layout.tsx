import { PropsWithChildren } from "react";
import BgImage from "./bg-image";

export default function YoldLayout({ children }: PropsWithChildren) {
    return (<>
        <BgImage>
            {children}
        </BgImage>
    </>);
}

{/* <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Open+Sans:wght@300&family=RocknRoll+One&display=swap" rel="stylesheet"> */}
