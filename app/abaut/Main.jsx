

function Main() {
  return (
    <div className="px-[165px]">
        <h1 className="text-[56px] text-[#36536B] font-normal mt-[82px] mb-[72px]">Pricing</h1>
        <div className="flex gap-[30px]">
        <div>
            <div className="w-[350px]">
                <h2 className="text-[#BA4270] text-[32px] font-normal mb-4">Free Plan</h2>
                <p className="text-[#6C8294] text-[15px] font-normal leading-7 mb-2">Build and test using our core set of products with up to 100 API requests </p>
                <h1 className="text-[#36536B] text-[56px] font-normal mb-6">$0.00</h1>
                <hr className="bg-[#36536B] opacity-25 h-[2px] mb-6" />
                <div className="flex flex-col gap-2 mb-6">
                    <p className={`text-[#36536B] text-[16px] before:content-['✔'] font-normal`}>Transactions</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal">Auth</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal">Identity</p>
                    <p className="text-[#36536B] text-[16px] before:content-['❌'] font-normal opacity-75">Investments</p>
                    <p className="text-[#36536B] text-[16px] before:content-['❌'] opacity-75">Assets</p>
                    <p className="text-[#36536B] text-[16px] before:content-['❌'] font-normal opacity-75">Liabilities</p>
                    <p className="text-[#36536B] text-[16px] before:content-['❌'] font-normal opacity-75">IIncome</p>
                </div>
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
                <button className="w-[168px] h-12 hover:text-white hover:bg-[#36536B] border-[#36536B] mt-6 mb-12 border-solid border-[2px] rounded-3xl">Request Access</button>
            </div>
        </div>

        
        <div>
            <div className="w-[350px]">
                <h2 className="text-[#BA4270] text-[32px] font-normal mb-4">Basic Plan</h2>
                <p className="text-[#6C8294] text-[15px] font-normal leading-7 mb-2">Launch your project with unlimited requests and no contractual minimums </p>
                <h1 className="text-[#36536B] text-[56px] font-normal mb-6">$249.00</h1>
                <hr className="bg-[#36536B] opacity-25 h-[2px] mb-6" />
                <div className="flex flex-col gap-2 mb-6">
                    <p className={`text-[#36536B] text-[16px] before:content-['✔'] font-normal`}>Transactions</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal">Auth</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal">Identity</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal opacity-75">Investments</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] opacity-75">Assets</p>
                    <p className="text-[#36536B] text-[16px] before:content-['❌'] font-normal opacity-75">Liabilities</p>
                    <p className="text-[#36536B] text-[16px] before:content-['❌'] font-normal opacity-75">IIncome</p>
                </div>
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
                <button className="w-[168px] h-12 border-[#36536B] hover:text-white hover:bg-[#36536B] mt-6 mb-12 border-solid border-[2px] rounded-3xl">Request Access</button>
            </div>
        </div>


        <div>
            <div className="w-[350px]">
                <h2 className="text-[#BA4270] text-[32px] font-normal mb-4">Premium Plan</h2>
                <p className="text-[#6C8294] text-[15px] font-normal leading-7 mb-2">Get tailored solutions, volume pricing, and dedicated support for your team </p>
                <h1 className="text-[#36536B] text-[56px] font-normal mb-6">$499.00</h1>
                <hr className="bg-[#36536B] opacity-25 h-[2px] mb-6" />
                <div className="flex flex-col gap-2 mb-6">
                    <p className={`text-[#36536B] text-[16px] before:content-['✔'] font-normal`}>Transactions</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal">Auth</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal">Identity</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal opacity-75">Investments</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] opacity-75">Assets</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal opacity-75">Liabilities</p>
                    <p className="text-[#36536B] text-[16px] before:content-['✔'] font-normal opacity-75">IIncome</p>
                </div>
                <hr className="bg-[#36536B] opacity-25 h-[2px]"  />
                <button className="w-[168px] hover:text-white hover:bg-[#36536B] h-12 border-[#36536B] mt-6 mb-12 border-solid border-[2px] rounded-3xl">Request Access</button>
            </div>
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

export default Main