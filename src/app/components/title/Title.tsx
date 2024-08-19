export default function Title(props: {text: String, className?: string}){
    const {text = "", className="" } = props;
    return (
        <>
            <div className={"font-[700] text-[24px] text-[#EFEEE0] mb-[20px] " + className + " text-center"}>
                {text}
            </div>
        </>
    )
}