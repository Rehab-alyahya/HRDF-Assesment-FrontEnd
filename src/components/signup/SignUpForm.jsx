


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Grid, TextField, Button, Box, Alert } from '@mui/material';
// import { signUp } from '../../services/authService';

// const SignUpForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
//   };

//   const validatePassword = (password, confirmPassword) => {
//     return password === confirmPassword;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     let errorMessage = '';

//     if (!firstName) {
//       errorMessage += 'Please enter your first name. ';
//     }

//     if (!lastName) {
//       errorMessage += 'Please enter your last name. ';
//     }

//     if (!email || !validateEmail(email)) {
//       errorMessage += 'Please enter a valid email address. ';
//     }

//     if (!password || !confirmPassword || !validatePassword(password, confirmPassword)) {
//       errorMessage += 'Passwords do not match. Please try again. ';
//     }

//     if (errorMessage) {
//       setError(errorMessage.trim());
//       return;
//     }

//     try {
//       const data = await signUp(firstName, lastName, email, password);
//       console.log('Sign-up successful:', data);
//       alert(data.message || 'User created successfully!');
//       navigate('/signin');
//     } catch (error) {
//       setError(error.message || 'An error occurred. Please try again.');
//     }
//   };

//   return (
//     <Grid container>
//       <Grid item xs={12} md={6}>
//         <Box
//           component="img"
//           src="https://i.pinimg.com/originals/a8/43/b6/a843b61e9d00e84d77d2e55e8c312117.jpg"
//           alt="signing up"
//           width="100%"
//           height="100vh"
//           objectFit="cover"
//           sx={{
//             border: '1px solid black',
//           }}
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           height="90.75vh"
//           padding={4}
//           sx={{
//             background: '#FFF8E8',
//             border: '1px solid black',
//           }}
//         >
//           <h1>Sign up</h1>
//           <p>Hi!</p>
//           <p>Enter your details to create your account</p>
//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}
//           <TextField
//             variant="outlined"
//             label="First Name"
//             fullWidth
//             margin="normal"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             label="Last Name"
//             fullWidth
//             margin="normal"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             label="Email"
//             type="email"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             label="Confirm Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleSubmit}
//             sx={{
//               backgroundColor: '#747c62',
//               '&:hover': {
//                 backgroundColor: '#5a5f4d',
//               },
//             }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default SignUpForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Box, Typography, Link } from "@mui/material";
import { signUp } from "../../services/authService";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
};

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const data = await signUp(firstName, lastName, email, password);
      alert(data.message || "User created successfully!");
      navigate("/signin");
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
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
            Sign Up
          </Typography>
          <Typography variant="body1" marginBottom={2}>
            Create your account
          </Typography>
          {error && (
            <Typography color="error" variant="body2" marginBottom={2}>
              {error}
            </Typography>
          )}
          <TextField
            variant="outlined"
            label="First Name"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
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
            label="Last Name"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
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
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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
            Sign Up
          </Button>
          <Typography variant="body2" marginTop={2}>
            Already have an account?{" "}
            <Link href="/signin" underline="hover" color="primary">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
