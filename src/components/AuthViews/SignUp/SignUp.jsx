import { Backdrop, Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { UButton, UTextField } from "../styles";
import * as React from 'react';
import { AuthBox } from "../styles";

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
        // Post form data
    }

    return (
        <Backdrop
            sx={{ backgroundColor: 'rgba(0, 0 , 0, 0.5)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <AuthBox>
                <Typography component="h4">Create Your Account</Typography>
                <Typography component="h5">All fields are required</Typography>

                <UTextField required onChange={handleChange('username')} placeholder="Username" variant="outlined" sx={{mb: "1em", width: "50%"}}/>
                <UTextField required onChange={handleChange('email')} placeholder="Email" variant="outlined" sx={{mb: "1em", width: "50%"}}/>
                <UTextField type={"password"} required onChange={handleChange('password')} id="outlined-basic" placeholder="Password" variant="outlined" sx={{mb: "1em", width: "50%"}}/>
                <UButton onClick={handleSubmit}>Create Account</UButton>
            </AuthBox>

        </Backdrop>
    );
}