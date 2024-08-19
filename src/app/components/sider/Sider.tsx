import Link from "next/link"
import SiderMenu from "./SiderMenu"
export default function Sider(){
    return (
        <>
        <div className="bg-[#212121] h-[100vh] fixed w-[280px]">
            <div className="bg-[#1C1C1C] py-[25px] px-[20px] text-center border-collapse flex justify-center">
                <Link href="/">
                    <img src="/logo.svg"
                        alt="Logo"
                        className="h-[42px] w-auto"
                    />
                </Link>
            </div>
            <SiderMenu />
        </div>
        </>
    )
}