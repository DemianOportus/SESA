import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

function EventComponent(props) {
  return (
    <Grid
      container
      alignItems="center"
      style={{
        backgroundColor: "#F6F6F6",
        padding: "32px",
        marginBottom: "32px",
      }}
    >
      <Grid item sm={12} lg={6}>
        <img
          id="EventComponentImage"
          src={props.img}
          alt="img"
          style={{
            width: "100%",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Grid>
      <Grid item sm={12} lg={6}>
        <Typography
          id="eventTitle"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "4vh",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          id="eventDescription"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "400",
            fontSize: "3vh",
            textAlign: "center",
            padding: "2vh 8vh",
            lineHeight: "1.7",
          }}
        >
          {props.description}
        </Typography>
        <Box textAlign="center">
          <Button
            href={props.sourceCode}
            id="LearnMoreButton"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textTransform: "none",
              backgroundColor: "#d5eaeb",
              color: "black",
              marginTop: "4%",
              boxShadow: "none",
              border: "1px solid black",
              fontFamily: "Montserrat",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default EventComponent;
