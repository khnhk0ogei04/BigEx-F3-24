"use client"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { runTransaction, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

export default function ButtonHeart(props: any) {
    const [isActive, setIsActive] = useState(false);
    const {id, wishlist} = props;

    useEffect(() => {
        onAuthStateChanged(authFirebase, user => {
            if (user){
                const userId = user.uid;
                console.log("Logged ", userId);
                if (wishlist && wishlist[userId]){
                    setIsActive(true);
                }
            }
        })
    }, [])
    const handleAddWishList = () => {
        const userId = authFirebase?.currentUser?.uid;
        // console.log(id);
        // console.log(userId);
        if (id && userId){
            const songsRef = ref(dbFirebase, `/songs/${id}`);
            runTransaction(songsRef, (song) => {
                if (song) {
                    if (song.wishlist && song.wishlist[userId]){
                        song.wishlist[userId] = null;
                        setIsActive(false);
                    } else {
                        if (!song.wishlist){
                            song.wishlist = {};
                        }
                        song.wishlist[userId] = true;
                        setIsActive(true);
                    }
                }
                return song;
            })
        }
    }
    return (
        <>
            <button className={"w-[34px] h-[34px] rounded-full border-white border-[1px] items-center justify-center inline-flex text-[15px] text-white ml-[10px] " + (isActive ? "border-primary bg-primary" : "border-white")}
                onClick={handleAddWishList}
            >
                <FaHeart color="red"/>
            </button>
        </>
    )
}