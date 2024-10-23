import React, { useCallback } from "react";
import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import '../../index.css'

const Country = (props: any) => {
    
    const imageWidthStyle = {
        width: '264px',
        height: '160px'
    };

    const convertPopulationNumber = useCallback(() => {
        const num = props.population;
        return Intl.NumberFormat("en-US").format(num)
    }, [props.population])


    //Returns a country component with a right margin for the first 4 countries in each row, 
    //while the 5th country on the row does not
    if((props.index + 1) % 5 !== 0) {
        return(
            <Box sx={{width: '264px', height: '336px', display: 'inline-block', backgroundColor: 'background.secondary', marginRight: {sm: '12px', md:'20px' , xl: '40px'}, marginTop: '50px', textAlign: {xs: 'left'}}}> 
                <Box sx={{width: '264px', height: '160px'}}>
                    <img style={imageWidthStyle} src={props.countryImage} />
                </Box>
                
                <Box sx={{marginTop: '20px', marginLeft: '25px', marginRight: '10px'}}> 
                    <Link className={"link-style-country-name"} to={`/${props.name}`}>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '18px', fontWeight: 'bold', color: "text.primary"}} variant="h5"><b>{props.name}</b></Typography>
                    </Link>
                    <Box sx={{marginTop: '10px'}}>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '14px', marginBottom: '2px'}} paragraph={true}><b>Population:</b> {convertPopulationNumber()}</Typography>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '14px', marginBottom: '2px'}} paragraph={true}><b>Region:</b> {props.region}</Typography>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '14px', marginBottom: '2px'}} paragraph={true}><b>Capital:</b> {props.capital}</Typography>
                    </Box>
                </Box>
                
            </Box>
        )
    }
    else {
        return(
            <Box sx={{width: '264px', height: '336px', display: 'inline-block', backgroundColor: 'background.secondary', marginTop: '50px', textAlign: {xs: 'left'}, marginRight: {sm: '12px', md:'20px' ,xl: '0px'}}}> 
                <Box sx={{width: '264px', height: '160px'}}>
                    <img style={imageWidthStyle} src={props.countryImage} />
                </Box>
                
                <Box sx={{marginTop: '20px', marginLeft: '25px', marginRight: '10px'}}> 
                    <Link className={"link-style-country-name"} to={`/${props.name}`}>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '18px', fontWeight: 'bold', color: "text.primary"}} variant="h5"><b>{props.name}</b></Typography>
                    </Link>
                    <Box sx={{marginTop: '10px'}}>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '14px', marginBottom: '2px'}} paragraph={true}><b>Population:</b> {convertPopulationNumber()}</Typography>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '14px', marginBottom: '2px'}} paragraph={true}><b>Region:</b> {props.region}</Typography>
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '14px', marginBottom: '2px'}} paragraph={true}><b>Capital:</b> {props.capital}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }

    
}

export default Country