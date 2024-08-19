import SongItem2 from "./SongItem2";
export default function SongList2(props: any){
    const {data} = props;
    return (
        <>
            <div className="grid grid-cols-1 gap-[10px]">
                {data.map((item: any, index: number) => (
                    <SongItem2 
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        singer={item.singer}
                        time={item.time}
                        link={item.link}
                        audio={item.audio}
                        wishlist={item.wishlist}
                    />
                ))}
            </div>
        </>
    )
}