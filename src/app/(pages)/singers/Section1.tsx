import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1(){
  let result: any = await new Promise((resolve) => {
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, (snapshot) => {
      const data = [];
      for (const key in snapshot.val()){
        const value = snapshot.val()[key];
        data.push({
          id: key,
          title: value.title,
          image: value.image,
          description: value.description,
          link: `singers/${key}`
        })
      }
      resolve(data);
    }) 
  })
    const data: any = [
        {
          image: "/demo/image-6.png",
          title: "Sơn Tùng M-TP",
          description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
          link: ""
        },
        {
          image: "/demo/image-6.png",
          title: "Thích Chân Quang",
          description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
          link: ""
        },
        {
          image: "/demo/image-6.png",
          title: "Thích Trúc Thái Minh",
          description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
          link: ""
        },
        {
          image: "/demo/image-6.png",
          title: "Thích Nhật Từ",
          description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
          link: ""
        },
        {
          image: "/demo/image-6.png",
          title: "Thích Tâm Phúc",
          description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
          link: ""
        }
      ];
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh Sách Ca Sĩ" />
                <CardList data = {result} />
            </div>
        </>

    )
}