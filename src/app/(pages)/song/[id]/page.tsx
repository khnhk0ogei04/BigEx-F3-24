import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "@firebase/database";
import { notFound } from "next/navigation";

export default async function SongDetailPage(
    {params} : {params : {id: string}}
){
    console.log(params.id);
    const result: any = await new Promise((resolve) => {
        const songRef = ref(dbFirebase, `songs/${params.id}`);
        onValue(songRef, async(snapshot) => {
            const data = snapshot.val();
            resolve(data);
        })
        
    });
    const lyric =  `
        Verse: 
        Níu ngàn lời cũng không ngăn được 
        Bàn chân bước đi không báo trước 
        Có những điều cất riêng trong lòng 
        Giờ bốn vách ngăn cùng cô phòng 
        Trốn chạy rồi hàn huyên với men 
        Cứ thế kết thân cùng ánh đèn 
        Lối mòn ngày nào trên phố quen 
        Vẫn đó dáng hình ngày người đến 
        Pre: 
        Rời xa, lòng đau, chết trong cơn u sầu 
        Liệu rằng tình đời ai sẽ thấu 
        Dĩ vãng xưa vẫn in sâu trong đầu (hah a hah) 
        Chorus: 
        Thời gian không thể xoá nhoà đôi ta 
        Có chăng chỉ là mờ phai đi theo tháng năm 
        Rồi khi tỉnh giấc mới chợt nhận ra 
        Thật quá khó để quên đi một người 
        Màn đêm u tối bao trùm không gian 
        Nói thay tiếng lòng này từ lâu đã vỡ tan 
        Thì ra duyên kiếp để mình gặp nhau 
        Dạy nhau tốt hơn xong dành lại cho người sau…   
    `;
    if (!result){
        notFound();
    }
    return (
        <>
            {/* CardInfo */}
            <CardInfo 
                image={result.image}
                title={result.title}
                description=""
            />
            {/* Section-2: Loi bai hat */}
            <Section2 lyric={lyric}/>
            {/* Section-3: Bai hat cung danh muc */}
            <Section3 categoryId={result.categoryId} songId={params.id}/>
        </>
    )
}