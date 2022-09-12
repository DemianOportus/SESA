import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../Navbar";
import Footer from "../Footer";
import Girl from "../images/girl.png";

import memberInfo from "../memberInfo";
import Members from "../Members";

function Homepage() {
  const theme = createTheme({
    components: {
      // Name of the component
      //   MuiButton: {
      //     defaultProps: {
      //       variant: "contained",
      //       fullWidth: "true",
      //     },
      //   },
    },
    typography: {
      h3: {
        fontFamily: "Fira",
        fontWeight: "bolder",
        letterSpacing: "1.5px",
      },
    },
  });

  const Item = styled(Grid)({
    justifyContent: "center",
    alignItems: "center",
    // display: "flex",
  });
  Item.defaultProps = {
    item: true,
    md: 4,
    xs: 12,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container maxWidth sx={{ mb: 10 }}>
          <Box
            sx={{
              display: { md: "flex", margin: "auto" },
              maxWidth: 800,
              mt: 10,
            }}
          >
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="h3"
                fontFamily="Monserrat"
                fontWeight="600"
                sx={{ mb: 2 }}
              >
                The Story So Far..
              </Typography>
              <Typography
                variant="h5"
                fontFamily="Playfair display"
                fontWeight="400"
                letterSpacing={1}
              >
                uOttawa's Software Engineering Student Association is the place
                you go when you have questions and/or want to connect to other
                people in the field of software development
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "inline-block", sm: "block" } }}>
              <img src={Girl} alt="someImage" width="400px"></img>
            </Box>
          </Box>

          <Box
            sx={{
              margin: "auto",
              maxWidth: 800,
              mt: 10,
            }}
          >
            <Typography
              variant="h3"
              fontFamily="Playfair display"
              sx={{ textAlign: "center", mb: 5 }}
            >
              Amazing Team
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {memberInfo.map((info) => (
                <Members {...info} />
              ))}
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
}
export default Homepage;
