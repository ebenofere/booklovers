import Image from "next/image"
import { Box, HStack, VStack } from "../../../styled-system/jsx"
import { Button } from "@/primitives/Button"
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { css } from "../../../styled-system/css";

const Sidebar = () => {
  return (
    <div
        className={css({
            bgColor:"#EEEAE1"
        })}
    >
        <Box>
            <Image
            src="/img/logo-dark.png"
            width={200}
            height={200}
            alt="BookLover logo"
            />
        </Box>
        <VStack alignItems={"left"}>
            <Box>Library</Box>
            <Box>Add Items</Box>
            <Box>Add Collection</Box>
            <Box>Publish</Box>
            <Box>Dashboards</Box>
        </VStack>
        <VStack alignItems={"left"}>
            <Box>Settings</Box>
            <Box>Support</Box>
            <Box>Logout</Box>
        </VStack>
        <Box>
            <Button css={({bgColor:"#4BC1D2"})}>Upgrade</Button>
        </Box>
        <HStack>
            <FaInstagram />
            <FaTwitter />
            <FaTiktok />
            <FaYoutube />
        </HStack>
            
    </div>
  )
}

export default Sidebar