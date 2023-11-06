import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import Blogs from "./Blogs";
import Logo from "./Logo";
import Search from "./Search";
import Sell from "./Sell";
import SideNav from "./SideNav";
import Artists from "./Artists";
import Footer from "./Footer";

const Homepage = () => {
    return ( 
        <Box backgroundColor='gray.100' py={8}>
        
        <Grid
            templateAreas={`"logo search seller"
                            "sidebar main artist"
                            "sidebar main artist"
                            "footer footer footer"`}
            gridTemplateRows={'80px 1fr'}
            gridTemplateColumns={{ lg: '200px 1fr 200px', xl: '250px 1fr 250px'}}
            mx={{lg: '4rem', xl: '8rem'}}
            gap='7'
            >
            <GridItem bg='white' borderRadius='10px' area={'logo'}>
                <Logo />
            </GridItem>

            <GridItem bg='white' borderRadius='10px' area={'search'}>
                <Search />
            </GridItem>

            <GridItem bg='#88C2BB' borderRadius='10px' area={'seller'}>
                <Sell />
            </GridItem>

            <GridItem bg='white' borderRadius='10px' area={'sidebar'}>
                <SideNav />
            </GridItem>

            <GridItem area={'main'}>
                <Blogs />
            </GridItem>

            <GridItem area={'artist'}>
                <Artists />
            </GridItem>

            <GridItem area={'footer'} >
                <Footer />
            </GridItem>
        </Grid>

        </Box>
    );
}
 
export default Homepage;