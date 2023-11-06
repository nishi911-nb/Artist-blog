import { Box, Icon, Button, Text, Flex } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { BiBell, BiLogOutCircle } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsWallet, BsPerson } from "react-icons/bs";
import { MdOutlineStars } from "react-icons/md";

const SideNav = () => {

  const items = [
    { name: "Notifications", icon: BiBell },
    { name: "Shop", icon: AiOutlineHeart },
    { name: "Conversation", icon: AiOutlineMail },
    { name: "Wallet", icon: BsWallet },
    { name: "Subscription", icon: MdOutlineStars },
    { name: "My Profile", icon: BsPerson },
    { name: "Settings", icon: AiOutlineSetting },
  ];

  return (
    <Flex flexDirection='column' height='100%' justifyContent='space-between'>
      <Box fontWeight="medium" fontSize="16px">
        <Box
          display="flex"
          alignItems="center"
          mt="3"
          py="2"
          px="9"
          color="#101010"
          borderLeft="3px solid #88C2BB"
        >
          <Icon as={GoHome} mr="3" boxSize={5} />
          <Text>Home</Text>
        </Box>

        {items.map((item) => (
          <Box
            key={item.name}
            display="flex"
            alignItems="center"
            mt="3"
            py="2"
            px="10"
            color="#8D8D8D"
            _hover={{
              py: "2",
              px: "10",
              borderLeft: "3px solid #88C2BB",
              color: "#101010",
            }}
          >
            <Icon as={item.icon} mr="3" boxSize={5} />
            <Text>{item.name}</Text>
          </Box>
        ))}
      </Box>

      <Box mb="10" py="2" px="10">
        <Button color="#88C2BB" variant="link" fontSize="16px" >
          <Icon as={BiLogOutCircle} mr="3" boxSize={5} />
          <Text>Log out</Text>
        </Button>
      </Box>

    </Flex>
  );
};

export default SideNav;
