import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
interface MenuLink {
    icon: ReactNode,
    title: String,
    link: Url,
    logged?: Boolean
}
export default function SiderMenuItem(props: { item: MenuLink, isShow: Boolean }) {
    const { item, isShow = false } = props;
    const pathName = usePathname();
    console.log(pathName);
    return (
        <>
            {isShow && (
                <li className="mb-[30px] border-b-[1px]">
                    <Link href={item.link} className={"flex items-center hover:text-primary font-[28px] "
                        + (item.link === pathName ? "text-primary" : "text-white")}
                    >
                        <span className="text-[20px] mr-[20px]">
                            {item.icon}
                        </span>
                        <span className="font-[600] color=[#ffffff]">
                            {item.title}
                        </span>
                    </Link>
                </li>
            )}
        </>
    )
}