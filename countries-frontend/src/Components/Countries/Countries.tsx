import { Box } from "@mui/material"
import TextField from "@mui/material/TextField"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";

const Countries = () => {
    return(
        <Box sx={{marginTop: '50px'}}>
            <TextField sx={{width: '480px', "& fieldset": {border: 'none'}, backgroundColor: 'white'}} label="Search for country..." id="searchCountries"
                InputProps={{endAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} 
                margin="normal"
            />
        </Box> 
    )
} 

export default Countries