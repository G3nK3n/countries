import './App.css'
import {BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import Layout from './Components/Layout';
import { useThemeContext } from './Components/DarkMode/ThemeContextProvider';


function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Box>
              <Layout />
            </Box>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
