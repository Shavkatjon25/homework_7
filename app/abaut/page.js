import Fut from "../Fut"
import Hedr from "../Hedr"
import Main from "./Main"


function page() {
  return (
    <div className="bg-[url('/about.svg')] bg-no-repeat bg-right-top">
        <Hedr/>
        <Main/>
        <Fut/>
    </div>
  )
}

export default page