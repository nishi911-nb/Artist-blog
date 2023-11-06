import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Icon, Image, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const Caraousel = () => {
  const items = [
    {
      name: "Emilie Jones",
      painting:
        "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Face Abstract",
      painting:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sLhLnqGkJ7wsHoyANLwWWIcKmiKyZ67xhg&usqp=CAU",
    },
    {
      name: "Blue Hands",
      painting:
        "https://www.artmajeur.com/medias/standard/n/a/nadezhda-zueva/artwork/15324532_dsc07780l.jpg?v=1642276901",
    },
    {
      name: "Sea Abstract",
      painting:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_3UTRRbE-9W9OyvKfPexg5KC4Tw7QRz22g&usqp=CAU",
    },
  ];

  return (
    <OwlCarousel items={2} loop="true" margin={30} autoplay="true" >
      {items.map((item) => (
        <Card key={item.name} boxShadow='none'> 
          <CardHeader p="0px" backgroundColor="gray.100">
            <Image
              maxH='200px'
              borderRadius='10px'
              src={item.painting}
              alt={item.name}
            />
          </CardHeader>

          <CardBody p="0px" backgroundColor="gray.100" color="#101010">
            <Text fontSize="14px" my={2}>
              Modern Wall Decor Framed Painting
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="24px" fontFamily="Barlow, sans-serif">
                $199.99
              </Text>
              <Flex>
                {[...Array(5)].map((e, i) => (
                  <Icon
                    as={AiFillStar}
                    key={i}
                    boxSize={5}
                    color="yellow.500"
                  />
                ))}
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </OwlCarousel>
  );
};

export default Caraousel;
