import React from "react";
import Country from './Country'
import countryAPI from '../../../data.json';

import { Box } from "@mui/material"

const CountriesLayout = (props: any) => {
    return(
        <Box sx={{marginTop: '30px'}}>
            {countryAPI.map((country, index) => {
                //FIX THIS
                if(String(props.searchResult) === String(country.name)) {
                    console.log("Result: ", props.searchResult)
                    return(
                        <Country key={index}
                            countryImage={country.flag} 
                            name={country.name} 
                            population={country.population} 
                            region={country.region}
                            capital={country.capital}
                        />
                    )
                }
                
            })}
        </Box>
    )
}

export default CountriesLayout