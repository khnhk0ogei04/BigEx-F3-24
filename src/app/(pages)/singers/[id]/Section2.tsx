import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default async function Section2(props : {singerId: string}){
    const {singerId} = props;
    const result: any = await new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, (snapshot) => {
            const data: any = [];
            for (const key in snapshot.val()){
                const value = snapshot.val()[key];
                console.log(singerId); // Id of this singer
                console.log(value.singerId); // Id of singers of this song
                if (value.singerId.includes(singerId)){
                    data.push({
                        id: key,
                        title: value.title,
                        image: value.image,
                        audio: value.audio,
                        listen: value.listen,
                        link: `/song/${key}`
                    })
                }
            }
            resolve(data);
        }) 
    })
    // const data: any = [
    //     {
    //         image: "/demo/Rectangle 25.png",
    //         title: "Cô Phòng",
    //         singer: "Hồ Quang Hiếu, Huỳnh Vân",
    //         time: "4:32"
    //     },
    //     {
    //         image: "/demo/Rectangle 25.png",
    //         title: "Cô Phòng",
    //         singer: "Hồ Quang Hiếu, Huỳnh Vân",
    //         time: "4:12"
    //     },
    //     {
    //         image: "/demo/Rectangle 25.png",
    //         title: "Cô Phòng",
    //         singer: "Hồ Quang Hiếu, Huỳnh Vân",
    //         time: "4:23"
    //     },
    //     {
    //         image: "/demo/Rectangle 25.png",
    //         title: "Cô Phòng",
    //         singer: "Hồ Quang Hiếu, Huỳnh Vân",
    //         time: "4:11"
    //     },
    //     {
    //         image: "/demo/Rectangle 25.png",
    //         title: "Cô Phòng",
    //         singer: "Hồ Quang Hiếu, Huỳnh Vân",
    //         time: "4:09"
    //     }
    // ]
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