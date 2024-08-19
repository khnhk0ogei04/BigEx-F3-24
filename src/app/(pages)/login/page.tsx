"use client"
import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import React from 'react';
import { Image } from "antd";
import { useRouter } from "next/navigation";
import {authFirebase} from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage: React.FC = () =>{
    const router = useRouter();
    const handleLogin = (event: any) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(authFirebase, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user){
                    router.push("/");
                }
            })
            .catch((error) => {
                alert("Account or Password is not correct");
            })
    }
    return (
        <>
        <div className="mt-[60px] mx-auto w-[600px]">
            <Title text="Login Account" className=""/>
            <form className="" onSubmit={handleLogin}>
                <FormInput 
                    label="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="khanh8a04@gmail.com"
                    required={true}
                />
                <FormInput 
                    label="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="[A-Za-z0-9]"
                    required={true}
                />
                <FormButton text="Login" />
            </form>

            <div className="mt-[20px] font-[500] flex items-center">
                <h3 className="text-left text-[24px] text-white m-0 mr-[18px]">App rating</h3> 
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly />
                </Stack>
            </div>
            <div className="mt-[40px] flex text-center justify-between">
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </Image.PreviewGroup>
            </div>

        </div>
        </>
    )
}
export default LoginPage;