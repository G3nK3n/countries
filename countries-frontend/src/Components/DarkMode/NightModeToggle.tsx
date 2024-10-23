import { Box, IconButton, Typography } from "@mui/material";
import { NightsStay, LightMode } from "@mui/icons-material";
import { useThemeContext } from "./ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();


  const capitalizeLetter = () => {
    return mode.charAt(0).toUpperCase() + mode.slice(1)    
  }

  return (

    

    <Box
      sx={{
        display: 'inline',
        bgcolor: "background.primary",
        color: "text.primary",
      }}
    >
      <IconButton sx={{ ml: 1 , marginRight: '15px', marginTop: '5px', display: 'inline', padding: '0', width: {xs: '16px' , xl:'20px'}}} onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <LightMode /> : <NightsStay />}
      </IconButton>
      <Typography sx={{fontFamily: 'Nunito', fontSize: '16px', marginBottom: '2px', display: 'inline'}} paragraph={true}>{capitalizeLetter()} Mode</Typography>
    </Box>
  );
};

export default NightModeToggle;