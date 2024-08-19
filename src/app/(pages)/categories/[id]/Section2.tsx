import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "@firebase/database";
import { resolve } from "path";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default async function Section2(props : {id: string}){
    const {id} = props;

    const result: any = await new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(id));
        onValue(songsQuery, (snapshot) => {
            const data: any = [];
            for (const key in snapshot.val()){
                const value = snapshot.val()[key];
                // console.log(value);
                data.push({
                    id: key,
                    title: value.title,
                    image: value.image,
                    audio: value.audio,
                    listen: value.listen,
                    link: `/song/${key}`,
                    wishlist: value.wishlist
                })
            }
            resolve(data);
        })
    })
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát" />
                {/* List */}
                <div className="">
                    <SongList2 data={result}/>
                </div>
            </div>
        </>
    )
}