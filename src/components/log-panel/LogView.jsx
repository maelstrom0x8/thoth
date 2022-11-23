import { Typography, Box } from "@mui/material";

export function EmptyLog() {
    return (
        <Box className="log-container empty-log-container" 
        sx={{
            margin: "5em 0 0 3em"
        }}>
            <Typography fontSize={"2em"}>Your log is empty</Typography>
            <Typography>To add new log entries click <b>New Log Entry</b>.</Typography>
        </Box>
    )
}

export function LogList({ logs = [] }) {
    return (
        <Box className="log-container">

        </Box>
    )
}