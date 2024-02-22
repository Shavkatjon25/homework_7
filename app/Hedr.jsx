import Image from "next/image"
import Link from "next/link"


function Hedr() {
  return (
    <div className="flex justify-between px-[165px] pt-10">
        <div className="flex gap-[53px] items-center">
            <Image width={103} height={38} className="w-full" src="./logo.svg" alt="" />
            <Link href={'/'} className="text-[15px] font-bold text-[#36536B] opacity-70 hover:opacity-100">Pricing</Link>
            <Link href={'/abaut'} className="text-[15px] font-bold text-[#36536B] opacity-70 hover:opacity-100">About</Link>
            <Link href={'/contact'} className="text-[15px] font-bold text-[#36536B] opacity-70 hover:opacity-100">Contact</Link>
        </div>
        <div>
            <Link href={'/forom'} className="hover:bg-[#DA6D97] bg-[#BA4270] w-[173px] h-[48px] rounded-3xl flex justify-center items-center text-white">Schedule a Demo</Link>
        </div>
    </div>
  )
}
 
export default Hedr