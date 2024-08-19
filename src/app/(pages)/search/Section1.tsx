"use client"
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default function Section1(){
    const searchParams = useSearchParams();
    const keywordDefault = searchParams.get("keyword") || "";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            let result: any = await new Promise((resolve) => {
                const songsRef = ref(dbFirebase, "songs");
                onValue(songsRef, async(snapshot) => {
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
            });
            const regex = new RegExp(keywordDefault, "i");
            result = result.filter((item: any) => regex.test(item.title));
            setData(result);
        }
        fetchApi()
    }, [keywordDefault])
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
                <Title text="Kết Quả Tìm Kiếm" />
                {/* List */}
                <div className="">
                    <SongList2 data={data}/>
                </div>
            </div>
        </>
    )
}