import { Box, Typography } from "@mui/material"
import countryAPI from '../../../data.json';

const Country = () => {
    
    const imageWidthStyle = {
        width: '264px',
        height: '160px'
    };
    
    return(
        <Box sx={{width: '264px', height: '336px', display: 'inline-block', backgroundColor: 'white'}}> 
            <Box sx={{width: '264px', height: '160px'}}>
                <img style={imageWidthStyle} src={countryAPI[0].flag} />
            </Box>
            <h3>{countryAPI[0].name}</h3>
            <Box>
                <p>Population: {countryAPI[0].population}</p>
                <p>Region: {countryAPI[0].region}</p>
                <p>Capital: {countryAPI[0].capital}</p>
            </Box>
            
        </Box>
    )
}

export default Country