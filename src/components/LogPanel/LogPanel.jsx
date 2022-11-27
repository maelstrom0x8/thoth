import * as React from "react";
import { CheckBoxOutlineBlankOutlined, Refresh } from "@mui/icons-material";
import { Box, Divider, IconButton, Paper } from "@mui/material";
import LogView from "./LogView";



export const LogPanel = () => {

    const [log, setLog] = React.useState([]);

    return (
        <Paper className="container-item main"
            elevation={6}
            sx={{
                display: "flex", flexDirection: "column",
                flex: "2", borderBlockColor: "#212121", margin: "5em 5em 1em 0"
            }}>

            <Box className="log-control" sx={{ backgroundColor: "white", padding: "1em 0 .5em .5em", borderRadius: ".5em .5em 0 0", display: "flex", maxWidth: "100vw", borderColor: "#212121", borderWidth: "1em" }}>
                <IconButton><CheckBoxOutlineBlankOutlined /></IconButton>
                <IconButton><Refresh /></IconButton>
            </Box>
            <Divider />
            <Box className="log-content" sx={{ flex: "2 0 70vh", borderRadius: "0 0 .5em .5em", padding: "1em", overflow: "scroll", backgroundColor: "white", borderColor: "#212121", borderWidth: "1em" }}>
            </Box>
            <LogView logs={log}/>
        </Paper>
    )
}