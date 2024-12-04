import { IoSearch } from "react-icons/io5";
import { Box, VStack, HStack } from "../../../styled-system/jsx";
import { Input } from "@/primitives/Input";
import { Text } from "@/primitives/Text";
import Image from "next/image";
import { css } from "../../../styled-system/css";

const Mainpage = () => {
  return (
    <div 
      className={css({
        // display:"flex",
        // alignItems:"center",
        // justifyContent:"space-between",
        w:"100%",
        border:"1px solid #000"
      })}
      
    >
      <HStack w={"100%"} alignItems={"center"} justifyContent={"space-between"} border={"1px solid #000"}>
        <HStack>
          <IoSearch />
          <Input placeholder="Start Searching..." />
        </HStack>
        <HStack>
          <VStack>
            <Text>Ebenezer Ofere</Text>
            <Text>Account Menu</Text>
          </VStack>
          <Image 
            src="/img/menu-icon.jpg"
            width={50}
            height={50}
            alt="menu option for settings"
          />
        </HStack>
      </HStack>
    </div>
  )
}

export default Mainpage