"use client"
import { FaBackwardStep, FaForwardStep, FaPause, FaPlay } from "react-icons/fa6";

export default function PlayActions(){
    const handlePlay = () => {
        const playAudio : any = document.querySelector(".play-audio");
        const boxButtonPlay = playAudio?.querySelector(".box-button-play");
        const elementAudio = playAudio?.querySelector(".inner-audio");
        if (boxButtonPlay?.classList.contains("play")){
            boxButtonPlay.classList.remove("play");
            elementAudio?.pause();
        } else {
            boxButtonPlay?.classList.add("play");
            elementAudio?.play();
        }
    }

    const handleNextPrev = (action: string) => {
        console.log(action);
        const playAudio: any = document.querySelector(".play-audio");
        const idSongCurrent = playAudio.getAttribute("song-id");
        const elementSongCurrent: any = document.querySelector(`[song-list] [song-id="${idSongCurrent}"]`);
        if (elementSongCurrent){
            switch(action){
                case "next":
                    const elementSongNext = elementSongCurrent.nextElementSibling;
                    if (elementSongNext){
                        const buttonPlay = elementSongNext.querySelector(".inner-button-play");
                        buttonPlay.click();
                    }
                    break;
                case "prev":
                    const elementSongPrev = elementSongCurrent.previousElementSibling;
                    if (elementSongPrev){
                        const buttonPlay = elementSongPrev.querySelector(".inner-button-play");
                        buttonPlay.click();
                    }                        
                    break;
            }
        }
    }
    return (
        <>
            <div className="flex items-center justify-center">
                        <button className="text-[16px] text-white" onClick={() => handleNextPrev("prev")}>
                            <FaBackwardStep />
                        </button>
                        <button onClick={handlePlay} className="text-[16px] text-white w-[32px] h-[32px] bg-primary rounded-full inline-flex items-center justify-center mx-[42px] box-button-play">
                            <FaPlay className="inner-icon-play"/>
                            <FaPause className="inner-icon-pause" />
                        </button>
                        <button className="text-[16px] text-white" onClick={() => handleNextPrev("next")}>
                            <FaForwardStep />
                        </button>
                    </div>
        </>
    )
}