import { Grid, Typography } from "@mui/material";
import * as React from "react";

export default function Members(props) {
  return (
    <Grid
      item
      sx={{
        textAlign: "center",
        justifyContent: "center",
        width: "250px",
        textTransform: "uppercase",
        display: "block",
        xs: { display: "inline-block" },
        mb: 5,
      }}
    >
      <div>
        <img
          src={props.imgurl}
          style={{ borderRadius: 100, width: "200px", height: "200px" }}
          alt="member"
        />
        <Typography variant="h6" gutterBottom component="div">
          {props.name}
        </Typography>
        <p gutterBottom variant="h6" component="div">
          {props.title}
        </p>
      </div>
    </Grid>
  );
}
