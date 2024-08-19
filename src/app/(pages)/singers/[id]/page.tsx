import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function SingerDetailPage(
    {params}: {params : {id: string}}
){
    console.log(params.id);
    const result: any = await new Promise((resolve) => {
        const singerRef = ref(dbFirebase, `singers/${params.id}`);
        onValue(singerRef, async(snapshot) => {
            const data = snapshot.val();
            resolve(data);
        })
    })

    return (
        <>
            {/* CardInfo */}
            <CardInfo 
                image={result.image}
                title={result.title}
                description={result.description}
                />
            {/* Section2: Music List */}
            <Section2 singerId={params.id}/>

        </>
    )
}