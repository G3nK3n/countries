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

const Countries = (props: any) => {

    const [region, setRegion] = React.useState<string>('')
    const [searchCountry, setSearchCountry] = React.useState<String>('')

    const handleDropdownChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value);
    };
    
    const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearchCountry(e.target.value);
    };

    return( 
        <Box sx={{marginTop: {xs: '10px', xl: '50px'}, backgroundColor: "background.default"}}> 
            <TextField onChange={handleSearch} sx={{width: {xs: '100%', md: '280px', xl: '480px'}, "& fieldset": {border: 'none'}, backgroundColor: 'background.secondary', fontFamily: 'Nunito'}} label="Search for country..." id="searchCountries"
                InputProps={{endAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} 
                margin="normal" 
            /> 
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200, float: {xs: 'none', md: 'right', xl: 'right'}, marginTop: {xs: '40px', md: '10px', xl: '0px'}, marginBottom: '5px !important', backgroundColor: "background.secondary", color: "text.primary"}}>
                <InputLabel sx={{color: "text.primary"}} id="demo-simple-select-standard-label">Filter by Region</InputLabel>  
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={region}
                    onChange={handleDropdownChange}
                    label="Region"
                    sx={{backgroundColor: "background.secondary", padding: '10px 20px'}} 
                >
                    <MenuItem sx={{backgroundColor: "background.secondary"}} value=" ">
                        <em>None</em> 
                    </MenuItem>
                    <MenuItem sx={{backgroundColor: "background.secondary"}} value={'Africa'}>Africa</MenuItem>
                    <MenuItem sx={{backgroundColor: "background.secondary"}} value={'Americas'}>Americas</MenuItem>
                    <MenuItem sx={{backgroundColor: "background.secondary"}} value={'Asia'}>Asia</MenuItem>
                    <MenuItem sx={{backgroundColor: "background.secondary"}} value={'Europe'}>Europe</MenuItem>
                    <MenuItem sx={{backgroundColor: "background.secondary"}} value={'Oceania'}>Oceania</MenuItem>
                </Select>
            </FormControl>
            <Box>
                <CountriesLayout data={props.data} regionResult={region} searchResult={searchCountry}/>
            </Box>
        </Box>

    )
} 

export default Countries