import React from "react";
import countryAPI from '../../../data.json';
import Country from './Country'

import { Box } from "@mui/material"

const CountriesLayout = () => {
    return(
        <Box sx={{marginTop: '30px'}}>
            <Country />
        </Box>
    )
}

export default CountriesLayout