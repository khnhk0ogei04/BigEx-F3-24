import Link from 'next/link';
export default function NotFound(){
    return (
        <>
            <div className='text-center my-[60px]'>
                <h2 className='text-[40px] font-[700] text-white'>404 NOT FOUND</h2>
                <div className='text-center h-[300px] rounded-[20px] flex justify-center'>
                    <img src='/demo/404NotFound.png' />
                </div>
                <p className='mt-[10px] mb-[30px] text-white'>Could not find requested resources</p>
                <Link href={"/"} className='inline-flex bg-primary text-white py-[15px] px-[40px] rounded-[5px]'>
                    Return Home
                </Link>
            </div>
        </>
    )
}