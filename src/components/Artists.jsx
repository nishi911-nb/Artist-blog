import { Box, Text, Flex, Avatar, AvatarBadge } from "@chakra-ui/react";

const Artists = () => {

    const items = [
        {
           name: 'Thomas Edward', 
           artist: 'https://images.pexels.com/photos/4406721/pexels-photo-4406721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
           photographers: 'https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Chris Doe', 
            artist: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            photographers: 'https://images.pexels.com/photos/763210/pexels-photo-763210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Emilie Jones', 
            artist: 'https://images.pexels.com/photos/4442102/pexels-photo-4442102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            photographers: 'https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Jessica Williams', 
            artist: 'https://images.pexels.com/photos/4442005/pexels-photo-4442005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            photographers: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        
    ]

    return ( 
        <>
        <Box display='flex' >
            <Text fontSize='16px' color='#101010'>Artists</Text>
            <Text ml={5} fontSize='16px' color='#8D8D8D'>Photographers</Text>
        </Box>

        {items.map(item => (
            
            <Box key={item.name} color='gray.600' bg='purple.400' borderRadius='10' px='5' pt='4.5rem' my='5'
            bgImg= {`linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5)), url(${item.photographers})`} 
            bgPosition='center' bgRepeat='no-repeat' bgSize='cover' minH='130px'>
                <Flex>
                    <Avatar border='2px solid white' borderRadius='10px' size='md'
                    src={item.artist}>
                        <AvatarBadge placement="top-end" boxSize='4' bg='green.500' />
                    </Avatar>
                    <Box ml={3}>
                    <Text fontSize='16px' color='white'>{item.name}</Text>
                    <Text fontSize='12px' fontWeight='medium' color='white'>@thewildwithyou</Text>
                    </Box>
                </Flex>
            </Box>
        ))}
        
        </>
    );
}
 
export default Artists;