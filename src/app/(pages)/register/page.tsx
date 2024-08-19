"use client"
import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";


export default function RegisterPage(){
    const router = useRouter();
    const handleRegister = (event: any) => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(authFirebase, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                set(ref(dbFirebase, 'users/' + user.uid), {
                    fullName: fullName
                })
                .then(() => {
                    router.push("/");
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <>
        <div className="mt-[60px] mx-auto w-[600px]">
            <Title text="Register Account" />
            <form className="" onSubmit={handleRegister}>
                <FormInput 
                    label="Họ Tên"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Eg: Lê Văn Luyện"
                    required={true}
                />
                <FormInput 
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="khanh8a04@gmail.com"
                    required={true}
                />
                <FormInput 
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="[A-Za-z0-9]"
                    required={true}
                />
                <FormButton text="Register" />
            </form>

            <div className="mt-[20px] font-[500] flex items-center">
                <h3 className="text-left text-[24px] text-white m-0 mr-[18px]">App rating</h3> 
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly />
                </Stack>
            </div>
        </div>
        </>
    )
}