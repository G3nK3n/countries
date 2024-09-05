import React from "react";
import Country from './Country'

import { Box } from "@mui/material"

const CountriesLayout = () => {
    return(
        <Box sx={{marginTop: '30px'}}>
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
        </Box>
    )
}

export default CountriesLayout