import { Suspense } from "react";
import Section1 from "./Section1";

export default function SearchPage(){
    return (
        <>
            <Suspense>
                <Section1 />
            </Suspense>
        </>
    )
}