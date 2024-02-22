import Fut from "../Fut"
import Hedr from "../Hedr"
import Tana from "./Tana"


function page() {
  return (
    <div className="bg-[url('/about.svg')] bg-no-repeat bg-right-top">
        <Hedr/>
        <Tana/>
        <Fut/>
    </div>
  )
}

export default page