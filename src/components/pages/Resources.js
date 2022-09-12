import { Typography, Container, Box } from "@mui/material";

import NavBar from "../Navbar";

export default function Resources() {
  return (
    <>
      <NavBar />
      <Container>
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            mt: 10,
          }}
        >
          <Typography variant="h3">
            Working hard to bring you the best
          </Typography>
          <Typography variant="h5"> Please be patient with us</Typography>
        </Box>
      </Container>
    </>
  );
}
