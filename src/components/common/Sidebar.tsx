import Image from "next/image"
import { Box, HStack, VStack } from "../../../styled-system/jsx"
import { Button } from "@/primitives/Button"
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { css } from "../../../styled-system/css";

const Sidebar = () => {
  return (
    <div
        className={css({
            bgColor:"#EEEAE1",
            py: "2.5rem",
            px: "1.5rem",
            display:"flex",
            flexDir:"column",
            justifyContent:"space-between",
        })}
    >
        <Box ml={"4"}>
            <Box mb={"12"}>
                <Image
                src="/img/logo-dark.png"
                width={150}
                height={150}
                alt="BookLover logo"
                />
            </Box>
            <VStack alignItems={"left"} justifyContent={"space-between"} mb={"3rem"} fontWeight={"500"} color={"#4B4B4D"} h={"20rem"}>
                <Box>Library</Box>
                <Box>Add Items</Box>
                <Box>Add Collection</Box>
                <Box>Publish</Box>
                <Box mb={"8"}>Dashboards</Box>
            
                <Box>Settings</Box>
                <Box>Support</Box>
                <Box>Logout</Box>
            </VStack>
        </Box>
        <Box>
            <Button css={({
                bgColor:"#4BC1D2", 
                color: "#FEFEFE", 
                fontWeight:"bold", 
                px: "4em", 
                py:"0.5em", 
                mb:"8", 
                borderRadius:"8px"})}>Upgrade</Button>
            <HStack justifyContent={"space-between"} color={"#4B4B4D"}>
                <FaInstagram size={"1.5em"} color={"#4B4B4D"}/>
                <FaTwitter size={"1.5em"} />
                <FaTiktok size={"1.5em"} />
                <FaYoutube size={"1.5em"} />
            </HStack>
        </Box>
    </div>
  )
}

export default Sidebar