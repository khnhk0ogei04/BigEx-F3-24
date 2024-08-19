export default function PlayInfo(){
    return (
        <>
            <div className="flex items-center w-[218px]">
                <div className="w-[49px] aspect-square rounded-[14px] truncate">
                        {/* Inner HTML here */}
                    <img src="" alt="" className="w-full h-full object-cover inner-image"/>
                </div>
                <div className="ml-[12px]">
                    <div className="font-[700] text-[16px] text-white mb-[2px] inner-title" >
                        {/* Inner Title Here */}
                    </div>
                    <div className="font-[700] text-[12px] text-[#FFFFFF70] mb-[2px] inner-singer" >
                        {/* Inner Singer Here */}
                    </div>
                </div>
            </div>
        </>
    )
}