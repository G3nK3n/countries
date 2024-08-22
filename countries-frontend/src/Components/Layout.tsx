import React from "react";
import { Box } from "@mui/material";
import Header from "./Header/Header";

const Layout = () => {
    return(
        <Box sx={{backgroundColor: 'white', top: 0}}>
            <Header />
        </Box>
    )
}

export default Layout;