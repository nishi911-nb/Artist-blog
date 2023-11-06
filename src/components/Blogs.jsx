import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { PiShareFat, PiDotsThreeVerticalBold } from "react-icons/pi";
import Caraousel from "./Caraousel";

const Blogs = () => {
  const items = [
    {
      name: "Lara Leones",
      content: "@thewallart",
      artist:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      painting:
        "https://images.pexels.com/photos/2045248/pexels-photo-2045248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Thomas J.",
      content: "@thecustomcreator",
      artist:
        "https://images.pexels.com/photos/9810659/pexels-photo-9810659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      painting:
        "https://images.pexels.com/photos/2236382/pexels-photo-2236382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <Box maxH="80vh" overflowY="auto">
      {items.map((item) => (

        <Card key={item.name} mb={7}>
          <CardHeader px="8">
            <Flex>
              <Flex flex="1" gap="4" alignItems="center">
                <Avatar
                  name={item.name}
                  src={item.artist}
                  borderRadius="10px"
                />

                <Box>
                  <Heading fontSize="20px" color="#101010"> {item.name} </Heading>
                  <Text fontSize="14px" fontWeight="medium" color="#8D8D8D"> {item.content} </Text>
                </Box>

              </Flex>

              <Icon as={PiDotsThreeVerticalBold} boxSize={8} />

            </Flex>
          </CardHeader>

          <CardBody px="8">

            <Text mb={8} fontSize="14px" fontWeight="medium" color="#101010">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <span style={{ color: "#FF5E8A" }}> Read More</span>
            </Text>

            <Box bgImg= {`url(${item.painting})`} borderRadius="10px" bgPosition='center' 
            bgRepeat='no-repeat' bgSize='cover' minH='300px'>
              <Icon as={AiOutlineHeart} boxSize={9} m={5} color='white' float='right'/>
            </Box>

          </CardBody>

          <Divider borderBottomWidth={3} color="#F3F3F3" />

          <CardFooter px="8">

            <Button variant="ghost" _hover={{ bg: "none" }} fontSize="20px">
              <Icon as={AiOutlineHeart} boxSize={7} mr={2} /> 9.8k
            </Button>

            <Button variant="ghost" _hover={{ bg: "none" }} fontSize="20px">
              <Icon as={RiChat3Line} boxSize={7} mr={2} /> 8.6k
            </Button>

            <Button variant="ghost" _hover={{ bg: "none" }} fontSize="20px">
              <Icon as={PiShareFat} boxSize={7} mr={2} /> 7.2k
            </Button>

          </CardFooter>
        </Card>
      ))}

      <Box maxW="700px">
      <Caraousel />
      </Box>
      
    </Box>
  );
};

export default Blogs;
