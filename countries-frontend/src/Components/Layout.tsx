import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Header from "./Header/Header";
import Countries from "./Countries/Countries";
import CountryDetails from "./Countries/CountryDetails";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
    return(
        <Box>
            <Box sx={{backgroundColor: 'white', top: 0}}> 
                <Container maxWidth="xl">
                    <Header />
                </Container>
            </Box>
        
            <Routes>
                <Route path="/" element={<Box><Container maxWidth="xl"><Countries /></Container></Box>}></Route>
                <Route path="/:countryName" element={<Container maxWidth="xl"><CountryDetails /></Container>}></Route>
            </Routes>
        </Box>
    )
}

export default Layout;