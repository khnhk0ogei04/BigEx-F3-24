import Link from "next/link";

export default function CardItem(props: {
    image: string,
    title: string,
    description: string,
    link: string
}){
    const {
        image= "",
        title= "",
        description= "",
        link= ""
    } = props;
    return (
        <>
        <div className="">
            <Link href={link}>
                <div className="w-full aspect-square rounded-[15px] truncate mb-[10px]">
                    <img src={image} alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="font-[700] text-[14px] text-white mb-[10px] line-clamp-1">
                    {title}
                </div>
                <div className="font-[500] text-[13px] text-white mb-[10px] line-clamp-1">
                    {description}
                </div>
            </Link>
        </div>    
        </>
    )
}