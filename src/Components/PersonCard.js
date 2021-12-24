import React from "react";
import {
  Container,
  Paper,
  Chip,
  Grid,
  Divider,
  Typography,
} from "@mui/material";

const DOCUMENT = {
  name: "Adriana Rigoberta Hernandez del Castillo",
  duration: "26",
  expeditionDate: "20 de diciembre de 2021",
  type: "Constancia",
  PDF: "https://www.google.com",
  ID: "r4TvkQf9A5Tk5Fp61t3l",
  modules: [
    "Presupuestos",
    "Proyecto de control",
    "Control de contratos",
    "Destajos a proveedores",
    "Requisiciones",
    "Órdenes de compra",
    "Almacenes",
    "Revisión de facturas",
    "Programación de pagos",
    "Cuentas bancarias",
  ],
  instructor: "David Ku",
};

const type = DOCUMENT.type.toUpperCase();
const name = DOCUMENT.name.toUpperCase();

const PersonCard = ({ ID }) => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: 5, marginBottom: 5 }}>
      <Paper
        elevation={20}
        sx={{
          paddingTop: 7,
          paddingBottom: 7,
          paddingLeft: 4,
          paddingRight: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" component="div">
          Soluciones Integrales y Tecnología Empresarial S.A. de C.V.
        </Typography>
        <Typography variant="h6" component="div">
          Otorga {DOCUMENT.type === "Constancia" ? "la" : "el"} presente
        </Typography>
        <Typography variant="h2" component="div" mt={3}>
          {type}
        </Typography>
        <Typography variant="caption" component="div">
          Con registro: {DOCUMENT.ID}
        </Typography>
        <Typography variant="h6" component="div" mt={1} mb={1}>
          a
        </Typography>
        <Typography variant="h4" component="div" mb={3}>
          {name}
        </Typography>
        <Divider />
        {DOCUMENT.type === "Constancia" ? (
          <>
            <Container maxWidth="sm">
              <Typography variant="subtitle1" mt={3}>
                Por su asistencia y participación en el curso de capacitación
                del sistema DiazarControl,
                {DOCUMENT.company
                  ? " realizado en la empresa " + DOCUMENT.company + " "
                  : " "}
                con una duración de {DOCUMENT.duration} horas.
              </Typography>
            </Container>
            <Typography variant="subtitle2" mt={3} mb={2}>
              Los módulos contemplados en el curso son los siguientes:
            </Typography>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {DOCUMENT.modules.map((module) => {
                return (
                  <Grid item key={module}>
                    <Chip
                      key={module}
                      label={module}
                      color="primary"
                      spacing={1}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </>
        ) : (
          <Typography variant="subtitle2" mt={2} mb={2} Bottom component="div">
            Por haber concluido un curso del sistema DiazarControl con duración
            de {DOCUMENT.duration} horas.
          </Typography>
        )}
        <Typography variant="overline" component="div" mt={2} mb={3}>
          Fecha de expedición
          {DOCUMENT.type === "Constancia" ? " de la" : "del"} siguiente:{" "}
          {DOCUMENT.expeditionDate}.
        </Typography>
        <Divider />
        <Typography variant="caption" component="div" mt={1}>
          <a color="primary" href={DOCUMENT.PDF}>
            Clic aquí para descargar en formato PDF
          </a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default PersonCard;
