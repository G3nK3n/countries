import { Box, Button, Stack, Typography } from "@mui/material"
import countryAPI from '../../../data.json';
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

const CountryDetails = () => {
    
    //Any for now until I make model for countries
    const [specificCountry, setSpecificCountry] = React.useState<any>({})
    const {countryName} = useParams(); //Get country name in parameters
    
    //In fullstack, keep track of history when clicking back button
    let navigate = useNavigate();

    const imageWidthStyle = {
        width: '560px',
        height: '401px'
    };

    useEffect(() => {
        const theSpecificCountry = countryAPI.find((theCountry) => theCountry.name.toLowerCase() === countryName?.toLowerCase())
        setSpecificCountry(theSpecificCountry)
    }, [countryAPI])
    

    
    return(
        <Box>
            <Box>
                <Box>
                    <Button variant="text" onClick={() => navigate(-1)}>Back</Button>
                </Box>
                <Stack direction={"row"}>
                    <Box sx={{display: 'inline-block'}}> 
                        <img style={imageWidthStyle} src={specificCountry.flag} />
                    </Box>
                    <Box style={imageWidthStyle} sx={{display: 'inline-block', marginLeft: '60px'}}> 
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '32px', fontWeight: 'bold'}} variant="h1"><b>{specificCountry.name}</b></Typography>
                        <p>Hello</p> 
                        <p>Hello</p> 
                        <p>Hello</p> 
                        <p>Hello</p>  
                        <p>Hello</p> 
                    </Box>
                </Stack>
                
                
            </Box>
            
        </Box>
    )
}

export default CountryDetails