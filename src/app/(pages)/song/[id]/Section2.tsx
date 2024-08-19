import Title from "@/app/components/title/Title";

export default function Section2(props: {lyric: string}){
    const {lyric = ""} = props;
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Lời Bài Hát" />
                <div className="bg-[#212121] rounded-[15px] p-[20px] text-white whitespace-pre-line">
                    {lyric}
                </div>
            </div>
        </>
    )
}