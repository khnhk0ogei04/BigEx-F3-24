import BannerHome from "@/app/components/banner/BannerHome";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1(){
  let result: any = await new Promise((resolve) => {
    const data: any = [];
    const songsRef = ref(dbFirebase, "songs");
    // To get data at this, import onValue from "firebase/database"
    onValue(songsRef, async(snapshot) => {
      for (const key in snapshot.val()){
        const value = snapshot.val()[key];
        data.push({
          id: key,
          image: value.image,
          title: value.title,
          audio: value.audio,
          listen: value.listen,
          singer: "Hồ Quang Hiếu, Huỳnh Vân",
          wishlist: value.wishlist
        });
      }
      resolve(data);
    });
  })
  result = result.slice(0, 3);
    // const date: any = [
    //     {
    //       image: "/demo/image-3.png",
    //       title: "Cô Phòng",
    //       singer: "Hồ Quang Hiếu, Huỳnh Văn",
    //       listen: 245000
    //     },
    //     {
    //       image: "/demo/image-4.png",
    //       title: "Hoa Nở Bên Đường",
    //       singer: "Quang Đăng Trần, ACV",
    //       listen: 20500
    //     },
    //     {
    //       image: "/demo/image-5.png",
    //       title: "Hứa Đợi Nhưng Chẳng Tới",
    //       singer: "Lâm Tuấn, Vương Thiên Tuấn",
    //       listen: 18200
    //     },
    //   ]
    return (
        <>
            <div className="flex flex-wrap items-start">
                <div className="lg:w-[534px] md:w-[100%]">
                    <BannerHome />
                </div>
                <div className="lg:flex-1 lg:ml-[20px] lg:mt-[0px] md:w-[100%] md:flex-none md:mt-[20px]">
                    <Title text={"Nghe nhiều"} />
                    <SongList data={result} />
              </div>
            </div>
        </>
    )
}