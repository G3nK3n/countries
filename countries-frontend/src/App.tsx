import './App.css'
import {BrowserRouter as Router } from 'react-router-dom';
import { Box } from "@mui/material";
import Layout from './Components/Layout';

function App() {

  return (
    <>
      <Router>
          <Box>
            <Layout />
          </Box>
      </Router>
    </>
  )
}

export default App
