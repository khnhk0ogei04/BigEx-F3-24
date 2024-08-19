import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default async function Section3(props : {categoryId: string, songId : string}){
    const {categoryId, songId} = props;
    let result: any = await new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(categoryId));
        onValue(songsQuery, async(snapshot) => {
            const data: any = [];
            for (const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id: key,
                    title: value.title,
                    image: value.image,
                    audio: value.audio,
                    listen: value.listen,
                    link: `/song/${key}`
                })
            }
            resolve(data);
        })
    })
    result = result.filter((item: any) => item.id !== songId);
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Bài Hát Cùng Danh Mục" />
                {/* List */}
                <div className="">
                    <SongList2 data={result}/>
                </div>
            </div>
        </>
    )
}