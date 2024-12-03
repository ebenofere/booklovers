import Sidebar from "@/components/common/Sidebar"
import { Box } from "../../../styled-system/jsx"
import Mainpage from "@/components/MainPage"

const Homepage = () => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Sidebar /> 
      <Mainpage />
    </Box>
  )
}

export default Homepage