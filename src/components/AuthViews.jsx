import { Button, Box, FormControl, TextField, Typography, Backdrop } from "@mui/material";
import { Link } from "react-router-dom";

import * as React from 'react';

export const SignUp = () => {

    const [values, setValues] = React.useState({
        username: "",
        email: "",
        password: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        console.log(values);
    }

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <Box className="auth-content" sx={{ backgroundColor: "white", padding: "1em", color: "#212121" }}>
                <Typography component="h4">Create Your Account</Typography>
                <Typography component="h5">All fields are required</Typography>
                <FormControl>
                    <TextField required margin="normal" onChange={handleChange('username')} placeholder="Username" variant="outlined" />
                    <TextField required margin="normal" onChange={handleChange('email')} placeholder="Email" variant="outlined" />
                    <TextField type={"password"} required margin="normal" onChange={handleChange('password')} id="outlined-basic" placeholder="Password" variant="outlined" />
                    <Button onClick={handleSubmit}>Create Account</Button>
                </FormControl>
            </Box>
        </Backdrop>
    );
}