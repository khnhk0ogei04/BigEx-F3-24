export default function FormButton(props: {text: string}){
    const {text} = props;
    return (
        <>
            <button 
                type="submit"
                className="h-[50px] w-full bg-primary text-white rounded-[6px] font-[600] text-[16px]"
            >{text}</button>
        </>
    )
}