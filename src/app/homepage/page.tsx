import Sidebar from "@/components/common/Sidebar"
import Mainpage from "@/components/common/MainPage"
import { css } from "../../../styled-system/css"

const Homepage = () => {
  return (
    <div className={css({
     display: "flex",
     h: "100vh",
     w: "100%", 
    })} >
      <Sidebar /> 
      <Mainpage />
    </div>
  )
}

export default Homepage