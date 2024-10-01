import Country from './Country'

import { Box } from "@mui/material"

const CountriesLayout = (props: any) => {

    const regionResult = props.regionResult;
    let filtered;

    if(regionResult === '') {
        filtered = props.data.filter((countries: any) => String(countries.name.common).toLowerCase().includes(String(props.searchResult).toLowerCase()))
    }
    else {
        filtered = props.data.filter((countries: any) => String(countries.name.common).toLowerCase().includes(String(props.searchResult).toLowerCase()) && countries.region === regionResult)
    }


    return(
        <Box sx={{marginTop: '30px'}}>
            {filtered.map((country: any, index: number) => {   
                return(
                    <Country key={index}
                        index={index}
                        countryImage={country.flags.png} 
                        name={country.name.common} 
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