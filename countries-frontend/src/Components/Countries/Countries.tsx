import React from "react";
import { Box } from "@mui/material"
import TextField from "@mui/material/TextField"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CountriesLayout from "./CountriesLayout";

const Countries = () => {

    const [region, setRegion] = React.useState('')
    const [searchCountry, setSearchCountry] = React.useState<String>('')

    const handleChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value);
    };
    
    const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearchCountry(e.target.value);
    };

    return( 
        <Box sx={{marginTop: '50px'}}> 
            <TextField onChange={handleSearch} sx={{width: '480px', "& fieldset": {border: 'none'}, backgroundColor: 'white'}} label="Search for country..." id="searchCountries"
                InputProps={{endAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} 
                margin="normal" 
            /> 
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200, float: 'right', marginBottom: '5px !important'}}>
                <InputLabel id="demo-simple-select-standard-label">Filter by Region</InputLabel>  
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={region}
                    onChange={handleChange}
                    label="Region"
                    sx={{backgroundColor: 'white', padding: '10px 20px'}} 
                >
                    <MenuItem value="">
                        <em>None</em> 
                    </MenuItem>
                    <MenuItem value={'Africa'}>Africa</MenuItem>
                    <MenuItem value={'America'}>America</MenuItem>
                    <MenuItem value={'Asia'}>Asia</MenuItem>
                    <MenuItem value={'Europe'}>Europe</MenuItem>
                    <MenuItem value={'Oceania'}>Oceania</MenuItem>
                </Select>
            </FormControl>
            <Box>
                <CountriesLayout searchResult={searchCountry}/>
            </Box>
        </Box>

    )
} 

export default Countries