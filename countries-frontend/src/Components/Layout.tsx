import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Header from "./Header/Header";
import Countries from "./Countries/Countries";

const Layout = () => {
    return(
        <Box>
            <Box sx={{backgroundColor: 'white', top: 0}}> 
                <Container maxWidth="xl">
                    <Header />
                </Container>
            </Box>
            <Box>
                <Container maxWidth="xl">
                    <Countries />
                </Container>
            </Box>
        </Box>
    )
}

export default Layout;