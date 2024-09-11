import React from "react";
import { Box, Typography } from "@mui/material"

const Country = (props: any) => {
    
    const imageWidthStyle = {
        width: '264px',
        height: '160px'
    };

    //Returns a country component with a right margin for the first 4 countries in each row, 
    //while the 5th country on the row does not
    if((props.index + 1) % 5 !== 0) {
        return(
            <Box sx={{width: '264px', height: '336px', display: 'inline-block', backgroundColor: 'white', marginRight: '40px', marginTop: '50px'}}> 
                <Box sx={{width: '264px', height: '160px'}}>
                    <img style={imageWidthStyle} src={props.countryImage} />
                </Box>
                <h3>{props.name}</h3>
                <Box>
                    <p>Population: {props.population}</p>
                    <p>Region: {props.region}</p>
                    <p>Capital: {props.capital}</p>
                </Box>
                
            </Box>
        )
    }
    else {
        return(
            <Box sx={{width: '264px', height: '336px', display: 'inline-block', backgroundColor: 'white', marginTop: '50px'}}> 
                <Box sx={{width: '264px', height: '160px'}}>
                    <img style={imageWidthStyle} src={props.countryImage} />
                </Box>
                <h3>{props.name}</h3>
                <Box>
                    <p>Population: {props.population}</p>
                    <p>Region: {props.region}</p>
                    <p>Capital: {props.capital}</p>
                </Box>
                
            </Box>
        )
    }

    
}

export default Country