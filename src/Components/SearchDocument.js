import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { Container, CardMedia, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";

const SearchDocument = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/validate/" + data.ID);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="document"
              label="Ingrese el ID de registro"
              variant="outlined"
              {...register("ID", { required: true })}
            />
            <IconButton type="submit" sx={{ p: "15px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </form>
        </Grid>
        <Grid item>
          {errors.ID && (
            <Alert variant="outlined" severity="warning" sx={{ marginTop: 1 }}>
              Por favor ingresa el ID de registro
            </Alert>
          )}
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            alt="ID de registro"
            image="https://firebasestorage.googleapis.com/v0/b/validacion-de-conocimientos.appspot.com/o/aplication%2Fimages%2FAPP_example-ID.jpg?alt=media&token=9e302efb-f802-4e39-aeac-c081765e76bb"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchDocument;
