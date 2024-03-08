import Image from "next/image"
const Banner = () => {
    return (
        <div className="h-[237px] bg-white flex items-center justify-center">
            <div className="h-[137px] relative w-full">
                <Image src={"/banner_1.jpg"} fill alt="" />
            </div>
        </div>
    )
}

export default Banner