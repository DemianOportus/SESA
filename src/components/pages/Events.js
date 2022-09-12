import React from "react";
import NavBar from "../Navbar";
import { Box, Typography } from "@mui/material";
import Footer from "../Footer";
import { Container } from "@mui/system";
import events from "../events";
import EventComponent from "../EventComponent";

export default function Events() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 5,
          }}
        >
          <Typography
            variant="h2"
            fontFamily="Playfair display"
            fontWeight="bolder"
          >
            Upcoming Events
          </Typography>
        </Box>
        {events.map(EventComponent)}

        <Footer />
      </Container>
    </>
  );
}
