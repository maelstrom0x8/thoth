import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";


const PasswordInput = styled(TextField)(({ theme }) => ({
    height: 300,
    background: theme.palette.background.primary,
    border: 0,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    resize: "none",
    flex: 2,
    padding: "0.3em",
    
}))


export const AuthBox = styled(Box)(({theme}) => ({
    backgroundColor: "white",
    padding: "1em",
    borderRadius: "0.5em",
    width: "600px",
    height: "400px",
    color: "black",
    flexDirection: "column",
    display: "flex",
    marginLeft: "3em"
}))

export const UTextField = styled(TextField)(({theme}) => ({
    backgroundColor: "white",
    color: "white",
    borderRadius: theme.spacing(1)
}))

export const UButton = styled(Button)(({theme}) => ({
    backgroundColor: "#212121",
    color: "white",
    width: "100px",
    borderRadius: theme.spacing(1),
    cursor: "pointer",
    padding: "0.5em 1em",
    fontFamily: theme.typography.fontFamily,
    textAlign: "center",
    border: "none",
    textDecoration: "none",
    display: "inline-block",
    textTransform: "capitalize"
}))