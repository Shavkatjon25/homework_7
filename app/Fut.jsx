import Image from "next/image"
import Link from "next/link"

function Fut() {
  return (
    <div className="flex items-center w-full h-[100px] gap-[502px] justify-center bg-[#1B262F]">
      <div className="gap-10 flex  ">
            <Image className="w-full" width={135} height={38}  src="./logoo.svg" alt="" />
            <Link href={'/'} className="text-[15px] font-bold text-[#FBFCFE] opacity-70 hover:opacity-100">Pricing</Link>
            <Link href={'/abaut'} className="text-[15px] font-bold text-[#FBFCFE] opacity-70 hover:opacity-100">About</Link>
            <Link href={'/contact'} className="text-[15px] font-bold text-[#FBFCFE] opacity-70 hover:opacity-100">Contact</Link>
      </div>
      <Image  width={120} height={24}  src="./uch3.svg" alt=""/>
    </div>
  )
}

export default Fut