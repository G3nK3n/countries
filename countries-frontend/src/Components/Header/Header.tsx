import { Box, Button, Typography } from "@mui/material";

const Header = () => {
    return(
        <Box sx={{padding: '20px 0px'}}>
            <Typography sx={{fontFamily: 'Nunito', fontSize: '24px'}} fontWeight={"bold"} variant="h5">Where in the world?</Typography>
            <Button>Enter data to database</Button>
        </Box>
    )
}

export default Header