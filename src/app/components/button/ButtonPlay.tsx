"use client"
import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: any){
    console.log(props);
    const handlePlay = () => {
        console.log(props);
        // Play audio:
        const elementPlayAudio: any = document.querySelector(".play-audio");

        // Insert SongID:
        elementPlayAudio?.setAttribute("song-id", props.id);

        // Play music
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        const elementSource = elementPlayAudio?.querySelector(".inner-source");
        if (elementPlayAudio){
            console.log("ABC");
        }
        elementSource.src = props.audio;
        elementAudio.load(); // Load data from link
        elementAudio.play(); // Play this audio
        // End Play Audio
        // Display the play block:
        if (elementPlayAudio.classList.contains("hidden")){
            elementPlayAudio.classList.remove("hidden");
        }
        // // Display image:
        // const elementImage = elementPlayAudio?.querySelector(".inner-image");
        // elementImage.src = props.image;
        // elementImage.alt = props.title;
        // // Display title:
        // const elementTitle = elementPlayAudio?.querySelector(".inner-title");
        // elementTitle.innerHTML = props.title;
        // // Display singer name:
        // const elementSinger = elementPlayAudio?.querySelector(".inner-singer");
        // elementSinger.innerHTML = props.singer;
        const elementImage = elementPlayAudio?.querySelector(".inner-image");
        elementImage.src = props.image;
        elementImage.alt = props.title;

        const elementTitle = elementPlayAudio?.querySelector(".inner-title");
        elementTitle.innerHTML = props.title;

        const elementSinger = elementPlayAudio?.querySelector(".inner-singer");
        elementSinger.innerHTML = props.singer;

        // Add class "play" to box-button-play:
        const boxButtonPlay = document.querySelector(".box-button-play");
        boxButtonPlay?.classList.add("play");

        // Take total time:
        const boxPlayTime: any = document.querySelector(".box-play-time");
        const boxPlayTimeTotal: any = document.querySelector(".inner-total");
        const boxPlayTimeCurrent: any = document.querySelector(".inner-current");

        elementAudio.onloadedmetadata = () => {
            const totalTime = elementAudio.duration;
            boxPlayTimeTotal.max = totalTime;
            // console.log(totalTime);
            // Current Time:
            elementAudio.ontimeupdate = () => {
                const currentTime = elementAudio.currentTime;
                boxPlayTimeTotal.value = currentTime;
                const percent = currentTime * 100/ totalTime;
                boxPlayTimeCurrent.style.width = `${percent}%`;
            }
        }
    }

        
    return (
        <>
            <button onClick={handlePlay} className={props.className + " inner-button-play"}>
                <FaPlay />
            </button>
        </>
    )
}