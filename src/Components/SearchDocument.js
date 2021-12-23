import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { Container, CardMedia } from "@mui/material";
import TextField from "@mui/material/TextField";

const SearchDocument = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="89vh"
      >
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Ingrese el ID de registro"
            variant="outlined"
          />
          <IconButton type="submit" sx={{ p: "15px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            alt="ID de registro"
            image="https://firebasestorage.googleapis.com/v0/b/validacion-de-conocimientos.appspot.com/o/aplication%2Fimages%2FAPP_example-ID.jpg?alt=media&token=135c0cf0-892c-451c-a8ed-86fc6c7930ab"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchDocument;
