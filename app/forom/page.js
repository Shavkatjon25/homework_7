
import Fut from "../Fut"
import Hedr from "../Hedr"
import Mainn from "./Mainn"


function page() {
  return (
    <div className="bg-[url('/about.svg')] bg-no-repeat bg-right-top">
        <Hedr/>
        <Mainn/>
        <Fut/>
    </div>
  )
}

export default page