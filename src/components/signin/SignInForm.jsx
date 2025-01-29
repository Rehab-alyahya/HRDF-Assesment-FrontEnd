
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Box, Typography, Link } from "@mui/material";
import { signIn } from "../../services/authService";
import { TokenDecode } from "../../utilities/TokenDecode";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [signInError, setSignInError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    setEmailError(!email || !validateEmail(email));
    setPasswordError(!password);

    if (!email || !password || !validateEmail(email)) {
      return;
    }

    try {
      const { access_token } = await signIn(email, password);
      console.log("--------" + email + "------------");
      localStorage.setItem("token", access_token);
      localStorage.setItem("isLoggedIn", true);

      const decodedToken = TokenDecode(access_token);

      if (decodedToken) {
        navigate("/home");
      } else {
        setSignInError("Unable to retrieve user information.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setSignInError("Email or password is incorrect");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding={10}
          sx={{
            background: "#fcfcfc",
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Sign In
          </Typography>
          <Typography variant="body1" marginBottom={2}>
            Welcome back!
          </Typography>
          {signInError && (
            <Typography color="error" variant="body2" marginBottom={2}>
              {signInError}
            </Typography>
          )}
          <TextField
            variant="outlined"
            label="Enter your email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={emailError}
            helperText={emailError ? "Invalid email" : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={passwordError}
            helperText={passwordError ? "Password is required" : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{
                padding: "13px",
                marginTop: "20px",
              backgroundColor: "black",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Sign In
          </Button>
          <Typography variant="body2" marginTop={2}>
            Don't have an account?{" "}
            <Link href="/signup" underline="hover" color="primary">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
