import { Box, Button, Typography } from "@mui/material";
import NightModeToggle from "../DarkMode/NightModeToggle";

const Header = () => {
    return(
        <Box sx={{padding: '20px 0px', backgroundColor: 'background.secondary', display: 'flex', justifyContent: 'space-between'}}> 
            <Box sx={{display: 'inline'}}>
                <Typography sx={{fontFamily: 'Nunito', fontSize: '24px', display: 'inline'}} fontWeight={"bold"} variant="h5">Where in the world?</Typography>
            </Box>
            <NightModeToggle />
        </Box>
    )
}

export default Header