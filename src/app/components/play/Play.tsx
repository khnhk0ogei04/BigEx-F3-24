import { FaBackwardStep, FaForwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6";
import PlayInfo from "./PlayInfo";
import PlayAudio from "./PlayAudio";
import PlayVolume from "./PlayVolume";
import PlayTime from "./PlayTime";
import PlayActions from "./PlayActions";

export default function Play(){
    return (
        <>
        <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999] play-audio hidden">
            <PlayAudio />
            <div className="container mx-auto flex items-center justify-between">
                <PlayInfo />
                <div className="flex-1 mx-[66px]">
                    <PlayActions />
                    <PlayTime />
                </div>
                <PlayVolume />
            </div>
        </div>
        </>
    )
}