import './App.css'
import {BrowserRouter as Router } from 'react-router-dom';
import { Box } from "@mui/material";
import Layout from './Components/Layout';

// import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
// import {
//   AppBar,
//   Container,
//   IconButton,
//   Toolbar,
//   Tooltip,
//   useTheme,
// } from "@mui/material";
// import { useContext, useMemo } from "react";
// import { ThemeContext } from "./Components/DarkMode/ThemeContextProvider";

function App() {

  // const theme = useTheme();
  // const { switchColorMode } = useContext(ThemeContext);
  // const activateName = useMemo(
  //   () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
  // //   [theme]
  // );

  return (
    <>
      {/* <AppBar
          position="static"
          sx={{
            padding: "0px !important",
            bgcolor: theme.palette.background.default,
          }}
      ></AppBar> */}
      <Router>
          <Box>
            <Layout />
          </Box>
      </Router>
    </>
  )
}

export default App
