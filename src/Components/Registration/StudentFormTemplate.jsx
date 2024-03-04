import React from 'react'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const StudentFormTemplate = ({ closeModal, regCategory }) => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        // For example, you can make an API call to register the user
        // and handle success or error accordingly
        console.log('Form submitted with data:', formData);
        // Close the modal after submitting the form
        closeModal();
    };

    const registarionCategoty = (regCategory) =>{
        if(regCategory==="studentReg"){
            return "USN"
        }
        if(regCategory==="staffReg"){
            return "Staff ID"
        }

    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="s">
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center", // Center the content horizontally
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: '75px', height: '75px' }}>
                        <FingerprintOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    {regCategory==="studentReg" ? "STUDENT" : "STAFF"} Registration
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="usn"
                                    label={regCategory==="studentReg" ? "USN" : "Staff ID"}
                                    name="usn"
                                    autoComplete="usn"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="fingerPrintId"
                                    label="FingerPrint ID"
                                    type="fingerPrintId"
                                    id="fingerPrintId"
                                    autoComplete="fingerPrintId"
                                />
                            </Grid>
                            </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};


export default StudentFormTemplate