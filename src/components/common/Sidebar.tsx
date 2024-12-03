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
            p: "2.5rem",
            display:"flex",
            flexDir:"column",
            justifyContent:"space-between"
        })}
    >
        <Box>
            <Box mb={"8"}>
                <Image
                src="/img/logo-dark.png"
                width={200}
                height={200}
                alt="BookLover logo"
                />
            </Box>
            <VStack alignItems={"left"} mb={"3rem"} >
                <Box>Library</Box>
                <Box>Add Items</Box>
                <Box>Add Collection</Box>
                <Box>Publish</Box>
                <Box>Dashboards</Box>
            </VStack>
            <VStack alignItems={"left"} mb={"3rem"}>
                <Box>Settings</Box>
                <Box>Support</Box>
                <Box>Logout</Box>
            </VStack>
            <Box mb={"2rem"}>
                <Button css={({bgColor:"#4BC1D2", color: "#FEFEFE", fontWeight:"bold", px: "4em", py:"0.5em", borderRadius:"8px"})}>Upgrade</Button>
            </Box>
        </Box>
        <HStack justifyContent={"space-between"}>
            <FaInstagram size={"1.5em"} />
            <FaTwitter size={"1.5em"} />
            <FaTiktok size={"1.5em"} />
            <FaYoutube size={"1.5em"} />
        </HStack>
            
    </div>
  )
}

export default Sidebar