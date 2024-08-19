export default function FormInput(props: any){
    const {label = "", type = "text", name = "", id = "", placeholder = "", required = false } = props; 
    return (
        <>
            <div className="mb-[15px]">
                {label && (
                    <label
                        className="block mb-[5px] font-[600] text-[16px]"
                        htmlFor="email"
                    >
                        <span className="text-white font-[700]">{label}</span>
                        <span className="text-red-500 ml-[5px]">*</span>
                    </label>
                )}
                    <input
                        type={type}
                        name={name}
                        id={id}
                        placeholder={placeholder}
                        className="h-[50px] w-full bg-white rounded-[8px] px-[16px] font-[700] text-[16px] outline-none"
                        required={required}
                    />
            </div> 
        </>
    )
}