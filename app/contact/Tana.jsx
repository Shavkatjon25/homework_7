import Image from "next/image"


function Tana() {
  return (
    <div>
        <div className="w-[1030px] ml-auto mr-auto pt-[82px] pb-[51px] pr-80">
            <h2 className="text-[56px]  text-[#36536B] font-normal leading-[56px]">We empower innovators by delivering access to the financial system</h2>
        </div>
        <div className="flex w-[920px] ml-auto mr-auto">
            <div className="flex-1">
                <h2 className="text-[#36536B] text-[32px] font-normal">Our Vision</h2>
            </div>
            <div className="w-[635px]">
                <p className="text-[#6C8294] text-[15px] font-normal">Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
            </div>
        </div>


        <div className="flex w-[920px] ml-auto mr-auto mt-[56px]">
            <div className="flex-1">
                <h2 className="text-[#36536B] text-[32px] font-normal">Our Business</h2>
            </div>
            <div className="w-[635px]">
                <p className="text-[#6C8294] text-[15px] font-normal">At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
            </div>
        </div>
        <div className="mt-[100px] mb-[72px]">
            <Image  src="/contact.png" alt="" width={1140} height={500} className="w-full" />
        </div>

        <div className="flex gap-[30px] w-full justify-center">
            <div className="w-[350px]">
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
                <h3 className="text-[#36536B] text-[16px] font-normal opacity-75 mt-4">Team Members</h3>
                <h2 className="text-[#BA4270] text-[56px] font-normal mb-4">300+</h2>
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
            </div>
            <div className="w-[350px]">
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
                <h3 className="text-[#36536B] text-[16px] font-normal opacity-75 mt-4">Team Members</h3>
                <h2 className="text-[#BA4270] text-[56px] font-normal mb-4">3</h2>
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
            </div>
            <div className="w-[350px]">
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
                <h3 className="text-[#36536B] text-[16px] font-normal opacity-75 mt-4">Team Members</h3>
                <h2 className="text-[#BA4270] text-[56px] font-normal mb-4">10M+</h2>
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
            </div>
        </div>


        <div className="flex w-[920px] ml-auto mr-auto mt-[72px]">
            <div className="flex-1">
                <h2 className="text-[#36536B] text-[32px] font-normal">The Culture</h2>
            </div>
            <div className="w-[635px]">
                <p className="text-[#6C8294] text-[15px] font-normal">Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
            </div>
        </div>
        <div className="flex w-[920px] ml-auto mr-auto mt-[56px] mb-[100px]">
            <div className="flex-1">
                <h2 className="text-[#36536B] text-[32px] font-normal">The People</h2>
            </div>
            <div className="w-[635px]">
                <p className="text-[#6C8294] text-[15px] font-normal">Were all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills. </p>
            </div>
        </div>

        <div className="flex gap-[220px] justify-center mb-[96px]">
            <h2 className="text-[48px] font-normal text-[#36536B] w-[445px]">Ready to start?</h2>
            <div className="w-[445px] h-12 overflow-hidden border rounded-3xl flex items-center justify-between bg-white mt-[21px] mb-[16px]    ">
                    <input type="text" placeholder="Enter email address" className='outline-none px-2 flex-1' />
                    <button className="hover:bg-[#DA6D97] bg-[#BA4270] w-[173px] h-[48px] rounded-3xl text-white flex justify-center items-center">Schedule a Demo</button>
                </div>
        </div>


    </div>
  )
}

export default Tana