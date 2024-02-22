import Image from "next/image"


function Main() {
  return (
    <div>




        <div className="flex px-[165px]">
            <div className=" flex flex-col w-[543px] leading-[72px] mr-[206px] mt-[152px]">
                <h2 className="text-[60px] font-normal">Start building with our APIs for absolutely free.</h2>
                <div className="w-[445px] h-12 overflow-hidden border rounded-3xl flex items-center justify-between bg-white mt-[21px] mb-[16px]    ">
                    <input type="text" placeholder="Enter email address" className='outline-none px-2 flex-1' />
                    <button className="hover:bg-[#DA6D97] bg-[#BA4270] w-[173px] h-[48px] rounded-3xl text-white flex justify-center items-center">Schedule a Demo</button>
                </div>
                <p>Have any questions? Contact Us</p>
            </div>
            <div>
                <Image  src="./ipad1.svg" alt="" width={263}  height={500}/>
            </div>
        </div>




        <div className="bg-[url('/qorafon.png')] w-full h-[472px] bg-top bg-no-repeat bg-cover flex items-center justify-between px-[165px]">
            <div className="w-[445px] text-white">
                <h2 className="text-[48px] font-normal">Who we work with</h2>
                <p className="text-[15px] opacity-70 text-[#FBFCFE] leading-7">Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                <button className="w-[129px] h-12 bg-white text-[#1B262F] mt-8 rounded-3xl">About Us</button>
            </div>
            <div>
                <Image width={536} height={103}  className="w-full" src="./nomlar.svg" alt="" />
            </div>
        </div>




        <div className="flex w-full gap-[125px] justify-center items-center mt-[150px]">
            <div>
                <Image width={445}  height={284} className="w-full" src="./cods.svg" alt="" />
            </div>
            <div className="w-[445px]">
                <h2 className="text-[48px] font-normal text-[#36536B]">Easy to implement</h2>
                <p className="text-[15px] text-[#36536B] opacity-70 mt-6 leading-7">Our API comes with just a few lines of code. Youll be up and running in no time. We built our documentation page to handle payments functionality with ease.</p>
            </div>
        </div>




        <div className="flex bg-[url('/telorqa.svg')] items-center justify-center bg-no-repeat bg-right h-[780px] mt-[-80px]">
            
            <div className="w-[445px]">
                <h2 className="text-[48px] font-normal text-[#36536B]">Simple UI & UX</h2>
                <p className="text-[15px] text-[#36536B] opacity-70 mt-6 leading-7">Our pre-built form is easy to integrate in your app or websites checkout flow and designed to optimize conversion. </p>
            </div> 
            <div className="flex gap-10 h-[500px]">
                <Image width={263}  height={500} className="w-full" src="./bir.svg" alt="" />
                <Image width={263} height={500}  className="w-full" src="./ikki.svg" alt="" />
            </div>
        </div>




        <div className="flex gap-[30px] justify-center">
                <div className="flex flex-col items-center gap-8">
                    <div><Image width={106} height={106}  className="w-full" src="./33.svg" alt="" /></div>
                    <div className="flex flex-col w-[350px] gap-4">
                        <h3 className="text-[18px] text-center font-bold text-[#36536B]">Personal Finances</h3>
                        <p className="text-[15px] text-center font-normal leading-6">Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div><Image width={106}  height={106} className="w-full" src="./32.svg" alt="" /></div>
                    <div className="flex flex-col w-[350px] gap-4">
                        <h3 className="text-[18px] text-center font-bold text-[#36536B]">Personal Finances</h3>
                        <p className="text-[15px] text-center font-normal leading-6">Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div><Image width={106} height={106}  className="w-full" src="./31.svg" alt="" /></div>
                    <div className="flex flex-col w-[350px] gap-4">
                        <h3 className="text-[18px] text-center font-bold text-[#36536B]">Personal Finances</h3>
                        <p className="text-[15px] text-center font-normal leading-6">Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                    </div>
                </div>
        </div>




        <div className="flex gap-[220px] justify-center mt-[96px]">
            <h2 className="text-[48px] font-normal text-[#36536B] w-[445px]">Ready to start?</h2>
            <div className="w-[445px] h-12 overflow-hidden border rounded-3xl flex items-center justify-between bg-white mt-[21px] mb-[16px]    ">
                    <input type="text" placeholder="Enter email address" className='outline-none px-2 flex-1' />
                    <button className="hover:bg-[#DA6D97] bg-[#BA4270] w-[173px] h-[48px] rounded-3xl text-white flex justify-center items-center">Schedule a Demo</button>
                </div>
        </div>




    </div>
  )
}

export default Main