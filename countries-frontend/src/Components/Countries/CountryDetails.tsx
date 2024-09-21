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

    const borderCountryBox = {
        width: '96px',
        heigth: '28px', 
        background: 'white',
        display: 'inline-block',
        textAlign: 'center',
        marginLeft: '5px',
        marginBottom: '10px',
        boxShadow: '3'
    }

    useEffect(() => {
        const theSpecificCountry = countryAPI.find((theCountry) => theCountry.name.toLowerCase() === countryName?.toLowerCase())
        setSpecificCountry(theSpecificCountry)
    }, [countryAPI])
    
    const getAllLanguages = () => {
        let allLanguages: string = "";
        let languageLength: number = specificCountry.languages?.length

        specificCountry.languages?.map((language: any, index: number) => {
            //This just checks if its the last language of the country to remove the comma
            if(index !== languageLength-1) {
                allLanguages += language.name + ", "
            }
            else if(index === languageLength-1){
                allLanguages += language.name
            }
        }) 

        console.log(specificCountry.border?.length)

        return allLanguages
    }

    const convertPopulationNumber = useCallback(() => {
        const num = specificCountry.population;
        return Intl.NumberFormat("en-US").format(num)
    }, [specificCountry.population])

    
    return(
        <Box>
            <Box>
                <Box sx={{marginTop: '70px', width: '85px', textAlign: 'center', cursor: 'pointer', boxShadow: '2'}} onClick={() => navigate(-1)}>
                    <Typography sx={{fontFamily: 'Nunito', fontSize: '14px'}} paragraph={true}>&#8592; Back</Typography> 
                </Box>
                <Stack direction={"row"} sx={{marginTop: '70px'}} >
                    <Box sx={{display: 'inline-block'}}> 
                        <img style={imageWidthStyle} src={specificCountry.flag} />
                    </Box>
                    <Box sx={{display: 'inline-block', marginLeft: '60px', width: '598px', height: '323px', marginTop: '40px'}}> 
                        <Typography sx={{fontFamily: 'Nunito', fontSize: '32px', fontWeight: 'bold'}} variant="h1"><b>{specificCountry.name}</b></Typography>
                         
                        <Stack direction={"row"} spacing={2} sx={{marginTop: '30px'}}>   
                            <Box sx={{display: 'inline-block'}}>
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Native Name:</b> {specificCountry.nativeName}</Typography>
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Population:</b> {convertPopulationNumber()}</Typography>
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Region:</b> {specificCountry.region}</Typography>
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Sub Region:</b> {specificCountry.subregion}</Typography>
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Capital:</b> {specificCountry.capital}</Typography>
                            </Box>
                            <Box sx={{display: 'inline-block', marginLeft: '160px !important'}}> 
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Top Level Domain:</b> {specificCountry.topLevelDomain}</Typography>
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Currency:</b> {specificCountry.currencies?.map((currency: any) => currency.name)}</Typography>
                                <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px'}} paragraph={true}><b>Languages:</b> {getAllLanguages()}</Typography> 
                            </Box>
                        </Stack>  
                        <Box sx={{marginTop: '60px'}}>  
                            <Typography sx={{fontFamily: 'Nunito', fontSize: '14px', marginBottom: '2px'}} paragraph={true}><b>Borders:</b> {specificCountry.borders?.map((country: any) => <Box sx={borderCountryBox}>{country}</Box>)}</Typography> 
                        </Box>
                    </Box>
                </Stack>
                
                
            </Box>
            
        </Box>
    )
}

export default CountryDetails