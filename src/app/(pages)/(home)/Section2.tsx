import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase} from "@/app/firebaseConfig";
import { onValue } from "@firebase/database";
import { ref } from "firebase/database";

export default async function Section2 (){
  let result: any = await new Promise((resolve) => {
    const categoriesRef = ref(dbFirebase, "categories");
    onValue(categoriesRef, async(snapshot) => {
      const data: any = [];
  //  console.log(snapshot.key) -> categories
  //  console.log(snapshot.val());
  // {
  //   description: 'Tổng hợp nhạc Rock mới nhất',
  //   image: 'https://backend.daca.vn/assets/images/rock.jpg',
  //   title: 'Rock'
  // }
      for (const key in snapshot.val()){
        console.log(key); // 1 2 3 4 5 6 7 
        const value = snapshot.val()[key];
        console.log(value);
        // 1
        // {
        //   description: 'Tổng hợp nhạc Nhạc trẻ mới nhất',
        //   image: 'https://backend.daca.vn/assets/images/nhac-tre.jpg',
        //   title: 'Nhạc trẻ'
        // }
        data.push({
          id: key,
          title: value.title,
          image: value.image,
          description: value.description,
          link: `/categories/${key}`
        })
      }
      resolve(data);
    })
  })
  result = result.slice(0, 5);
    // const data: any = [
    //     {
    //       image: "/demo/image-6.png",
    //       title: "Nhạc Trẻ",
    //       description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
    //       link: ""
    //     },
    //     {
    //       image: "/demo/image-6.png",
    //       title: "Nhạc Trẻ",
    //       description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
    //       link: ""
    //     },
    //     {
    //       image: "/demo/image-6.png",
    //       title: "Nhạc Trẻ",
    //       description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
    //       link: ""
    //     },
    //     {
    //       image: "/demo/image-6.png",
    //       title: "Nhạc Trẻ",
    //       description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
    //       link: ""
    //     },
    //     {
    //       image: "/demo/image-6.png",
    //       title: "Nhạc Trẻ",
    //       description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
    //       link: ""
    //     }
    //   ];
    
    return (
        <>
            <div className="mt-[30px]">
                <Title text={"Danh mục nổi bật"} />
                <CardList data={result}/>
            </div>
        </>
    )
}