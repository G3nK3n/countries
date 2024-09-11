import Country from './Country'
import countryAPI from '../../../data.json';

import { Box } from "@mui/material"

const CountriesLayout = (props: any) => {
    
    const filtered = countryAPI.filter((countries) => String(countries.name).toLowerCase().includes(String(props.searchResult).toLowerCase()))
     
    return(
        <Box sx={{marginTop: '30px'}}>
            {filtered.map((country, index) => {   
                return(
                    <Country key={index}
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