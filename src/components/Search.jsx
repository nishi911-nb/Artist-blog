import { Box, InputGroup, InputLeftElement, Input, Icon, Button, Text } from "@chakra-ui/react";
import { BiSearch, BiFilter } from 'react-icons/bi'

const Search = () => {
    return ( 
        <Box display='flex' justifyContent='space-between' alignItems='center' m={5}>
        <InputGroup borderColor='white' size='sm' width='auto'>
            <InputLeftElement pointerEvents='none'>
            <Icon as={BiSearch} color='black' boxSize={6}/>
            </InputLeftElement>
            <Input type='text' placeholder='Search here...' />
        </InputGroup>
        <Button variant='none' color='#303030'>
        <Icon as={BiFilter} boxSize={6}/> 
        <Text fontSize='14px' >Filters</Text>
        </Button>
        </Box>
    );
}
 
export default Search;