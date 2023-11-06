import { Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
    return ( 
        <Flex fontSize='10px' justifyContent='space-between' color='#8D8D8D'>

            <Flex gap={10}>
                <Text>2022©logo name</Text>
                <Text>Developed by ivan infotech</Text>
            </Flex>

            <Flex gap={8}>
                <Link href='#'> Privacy </Link>
                <Link href='#'> Terms of Service </Link>
                <Link href='#'> Cookie Notice </Link>
            </Flex>

        </Flex>
    );
}
 
export default Footer;