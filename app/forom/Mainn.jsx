import Image from "next/image"


function Mainn() {
  return (
    <div className="px-[165px]">
        <h1 className="text-[56px] text-[#36536B] font-normal mt-[82px] mb-[72px] w-[730px] leading-[56px]">Submit a help request and well get in touch shortly.</h1>

        <div className="flex w-full justify-between items-center">
        <div>

            <div className="w-[445px]">
                <input type="text"  className='outline-none border-none bg-[#EDF3F8] pl-2' placeholder="Name"/>
                <hr className="h-[2px] bg-[#36536B]"/>
            </div>
            <div className="w-[445px] mt-6">
                <input type="text"  className='outline-none border-none bg-[#EDF3F8] pl-2' placeholder="Email Adress"/>
                <hr className="h-[1.5px] bg-[#36536B]"/>
            </div>
            <div className="w-[445px] mt-6">
                <input type="text"  className='outline-none border-none bg-[#EDF3F8] pl-2' placeholder="Company Name"/>
                <hr className="h-[1.5px] bg-[#36536B]"/>
            </div>
            <div className="w-[445px] mt-6">
                <input type="text"  className='outline-none border-none bg-[#EDF3F8] pl-2' placeholder="Title"/>
                <hr className="h-[1.5px] bg-[#36536B]"/>
            </div>
            <div className="w-[445px] mt-6">
                <input type="text"  className='outline-none border-none bg-[#EDF3F8] pl-2 mb-16' placeholder="Message"/>
                <hr className="h-[1.5px] bg-[#36536B]"/>
            </div>
            <div className="flex gap-[26px] w-[445px] mt-6">
                <input type='checkbox' />
                <p className="text-[#36536B] text-[15px] font-normal opacity-75 w-[445px] leading-[25px]">Stay up-to-date with company announcements and updates to our API</p>
            </div>
            <button className="w-[168px] h-12 border-[#36536B] hover:text-white hover:bg-[#36536B] mt-6 mb-12 border-solid border-[2px] rounded-3xl">Submit</button>
        </div>


        <div>
            <p className="text-[#36536B] text-[24px] font-normal opacity-75 w-[445px] mb-10">Join the thousands of innovators already building with us</p>
            <Image src="./form.svg" alt=""  width={541} height={104}/>
        </div>
        </div>


        <div className="flex justify-between mt-[96px] mb-[96px]">
            <h2 className="text-[48px] font-normal text-[#36536B] w-[445px]">Ready to start?</h2>
            <div className="w-[445px] h-12 overflow-hidden border rounded-3xl flex items-center justify-between bg-white mt-[21px] mb-[16px]    ">
                    <input type="text" placeholder="Enter email address" className='outline-none px-2 flex-1' />
                    <button className="hover:bg-[#DA6D97] bg-[#BA4270] w-[173px] h-[48px] rounded-3xl text-white flex justify-center items-center">Schedule a Demo</button>
                </div>
        </div>
    </div>
  )
}

export default Mainn