import React from "react";
import { Container, Typography, Grid, CardMedia } from "@mui/material";

const Inicio = () => {
  return (
    <Container disableGutters maxWidth="md" sx={{ pt: 8, pb: 6, pl: 2, pr: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Typography
            component="h1"
            variant="h2"
            color="secondary"
            gutterBottom
          >
            Certificación Diazar
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ textAlign: "justify" }}
          >
            La Certificación Diazar es una acreditación profesional que Diazar
            otorga a quienes demuestran competencias en aspectos básicos y
            avanzados en las aplicaciones que Diazar desarrolla. Una
            certificación de Diazar les permite demostrar a las personas que
            Diazar las reconoce como expertos en la aplicación o módulo descrito
            en el certificado.
          </Typography>
        </Grid>
        <Grid item xs={8} sm={4}>
          <CardMedia
            component="img"
            alt="Certificado"
            image={require("../Images/certificado.jpg")}
            sx={{ borderRadius: 5 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="primary"></Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h4"
            variant="h3"
            color="secondary"
            gutterBottom
          >
            Constancia
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ textAlign: "justify" }}
          >
            La constancia es un documento emitido por Diazar, que reconoce la
            participación de una persona en un curso de capacitación para una
            empresa.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inicio;
