import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "@firebase/database";

export default async function SongsByCategoriesPage({
    params
}: {params: {id: string}}){
    console.log(params.id);
    const result: any = await new Promise((resolve) => {
        const categoryRef = ref(dbFirebase, `categories/${params.id}`);
        onValue(categoryRef, (snapshot) => {
            const data = snapshot.val();
            resolve(data);
        })
    });
    console.log(result);



    return (
        <>
            {/* CardInfo */}
            <CardInfo 
                image={result.image}
                title={result.title}
                description={result.description}
            />
            <Section2 id={params.id}/>
        </>
    )
}