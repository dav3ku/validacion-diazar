import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Google from "../Images/social-google.svg";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { db } from "../Firebase/FirebaseConfig";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const searchUser = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userData = await getDoc(userRef);
  if (!userData.exists()) {
    await addUser(user);
  }
};

const addUser = async (user) => {
  const userRef = collection(db, "users");
  await setDoc(doc(userRef, user.uid), {
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
  });
};

const googleHandler = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      searchUser(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(
        "Error Code: ",
        errorCode,
        "Error Message: ",
        errorMessage,
        email,
        credential
      );
    });
};

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Acceso
        </Typography>
        <Button
          disableElevation
          fullWidth
          onClick={googleHandler}
          size="large"
          variant="outlined"
          color="secondary"
          sx={{
            mb: 3,
            mt: 3,
          }}
        >
          <Box
            sx={{
              mr: { xs: 1, sm: 2, width: 20 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Google}
              alt="google"
              width={20}
              height={20}
              style={{ marginRight: matchDownSM ? 8 : 16 }}
            />
          </Box>
          Acceder con Google
        </Button>
        <div sx={{ width: "100%" }}>
          <Divider>Ó</Divider>
        </div>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar de sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
