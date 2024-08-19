"use client"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
// If you want to use Client's event: must add "use client" to top of page
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const keywordDefault = searchParams.get("keyword") || "";
    const handleSearch = (event: any) => {
        event.preventDefault();
        const keyword = event.target.keyword.value;
        if (keyword){
            router.push(`/search?keyword=${keyword}`);

        }
    }
    return (
        <>
        <form onSubmit={handleSearch} className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center">
            <input 
                type="text"
                name="keyword"
                placeholder="Search..."
                className="order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1"
                defaultValue={keywordDefault}
            />
            <button type="submit" className="order-1 text-[22px] mr-[20px] text-white">
            <FaMagnifyingGlass />
            </button>
        </form>
        </>
    )
}