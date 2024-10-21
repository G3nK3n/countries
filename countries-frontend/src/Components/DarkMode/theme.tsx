import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, common } from "@mui/material/colors";

const theme = {
  palette: {
    primary: "#202C36",
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: "#f2f2f2",
            secondary: "#fff"
          },
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: "#202C36",
            secondary: "#2B3844",
            paper: deepOrange[900],
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
          },
          
        }),
  },
});

export default theme;