"use client"
export default function PlayTime(){
    const handleChange = (event: any) => {
        const boxPlayTimeTotal = event.target;
        // console.log(boxPlayTimeTotal);
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementAudio: any = elementPlayAudio?.querySelector(".inner-audio");
        elementAudio.currentTime = parseFloat(boxPlayTimeTotal.value);
    }
    return (
        <>
            <div className="mt-[11px] relative box-play-time">
                        <div className="h-[4px] w-[80%] bg-primary rounded-[50px] absolute left-0 mt-[13.5px] inner-current"></div>
                        <input type="range"
                            min={0}
                            max={0}
                            defaultValue={0}
                            onChange={handleChange}
                            className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                         />
                    </div>
        </>
    )
}