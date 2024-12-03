import Sidebar from "@/components/common/Sidebar"
import Mainpage from "@/components/common/MainPage"
import { css } from "../../../styled-system/css"

const Homepage = () => {
  return (
    <div className={css({
     border:"1px solid #000",
     h: "100%",
     w: "100%"
    })} >
      <Sidebar /> 
      <Mainpage />
    </div>
  )
}

export default Homepage