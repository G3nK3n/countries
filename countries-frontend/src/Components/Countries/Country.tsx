import React from "react";
import { Box, Typography } from "@mui/material"

const Country = (props: any) => {
    
    const imageWidthStyle = {
        width: '264px',
        height: '160px'
    };
    
    return(
        <Box sx={{width: '264px', height: '336px', display: 'inline-block', backgroundColor: 'white'}}> 
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

export default Country