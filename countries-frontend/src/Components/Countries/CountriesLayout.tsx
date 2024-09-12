import Country from './Country'
import countryAPI from '../../../data.json';

import { Box } from "@mui/material"

const CountriesLayout = (props: any) => {
    
    const regionResult = props.regionResult;
    let filtered;

    if(regionResult === '') {
        filtered = countryAPI.filter((countries) => String(countries.name).toLowerCase().includes(String(props.searchResult).toLowerCase()))
    }
    else {
        filtered = countryAPI.filter((countries) => String(countries.name).toLowerCase().includes(String(props.searchResult).toLowerCase()) && countries.region === regionResult)
    }

    
    
    return(
        <Box sx={{marginTop: '30px'}}>
            {filtered.map((country, index) => {   
                return(
                    <Country key={index}
                        index={index}
                        countryImage={country.flag} 
                        name={country.name} 
                        population={country.population} 
                        region={country.region}
                        capital={country.capital}
                    />
                )
            })}
        </Box>
    )
}

export default CountriesLayout