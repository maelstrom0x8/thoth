import { Backdrop, Box, Button, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import * as React from 'react';
import { AuthBox } from "../styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#eee"
        },
        text: {
            primary: "#ffffff"
        }
    }
})

export const SignIn = () => {
    const [values, setValues] = React.useState({
        username: "",
        password: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        // Post form data
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <AuthBox>
                    <Box sx={{ margin: "4em" }}>
                        <TextField placeholder="Username" onChange={handleChange("username")} />
                        <TextField placeholder="Password" type={"password"} onChange={handleChange("password")} />
                        <Button onClick={handleSubmit}>Sign In</Button>
                        <Typography>Not registered? <Link to={"/register"} style={{ textDecoration: 'none', color: 'black' }}> Create Account </Link> </Typography>
                    </Box>
                </AuthBox>
            </Backdrop>
        </ThemeProvider>
    )
}