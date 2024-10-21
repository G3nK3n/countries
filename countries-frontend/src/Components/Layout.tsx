import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Header from "./Header/Header";
import Countries from "./Countries/Countries";
import CountryDetails from "./Countries/CountryDetails";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";



const Layout = () => {

    const url = "http://localhost:5000/getCountries/";
    const [data, setData] = useState<any[]>([]);
    
    const getRequest = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            await response.json().then(theData => {
                setData(theData)
            });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRequest();
    }, [])


    return(
        <Box>
            <Box sx={{backgroundColor: 'background.secondary', top: 0}}> 
                <Container maxWidth="xl">
                    <Header />
                </Container>
            </Box>
        
            <Routes>
                <Route path="/" element={<Box ><Container maxWidth="xl"><Countries data={data} /></Container></Box>}></Route>
                <Route path="/:countryName" element={<Container maxWidth="xl"><CountryDetails data={data} /></Container>}></Route>
            </Routes>
        </Box>
    )
}

export default Layout;