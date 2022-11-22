import { Box, Button, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import { LogProvider } from "../services/log/Contexts";
import ListPanel from "./ListPanel";

import LogEntry from "./LogEntry";

import { Add, CheckBoxOutlineBlankOutlined, Refresh } from "@mui/icons-material";

export default function Home() {

    const [entryOpen, setEntryOpen] = useState(false);

    const entryPanelOpen = () => {
        setEntryOpen(true);
    }

    const entryPanelClose = () => {
        setEntryOpen(false);
    }

    return (
        <Box className="home-container"
            sx={{ display: "flex", justifyContent: "left", backgroundColor: "black", position: "fixed", top: "0", bottom: "0", right: "0", left: "0" }}>
            <Box className="container-item side" sx={{ padding: "1em", marginRight: ".2em", marginTop: "3em" }}>

                {/* @TODO Add logo here */}
                <Button id="add-button" onClick={entryPanelOpen} endIcon={<Add />}>New Log Entry</Button>
            </Box>

            <Box className="container-item main" sx={{ display: "flex", flexDirection: "column",
                padding: "1em", height: "20em", borderRadius: "0 0 1em .5em", marginRight: ".2em",
                flex: "2"
            }}>
                <Box className="log-control" sx={{ backgroundColor: "#212121", padding: "1em 0 .5em .5em", borderRadius: ".5em .5em 0 0", display: "flex", marginTop: "5em", maxWidth: "100vw" }}>
                    <IconButton><CheckBoxOutlineBlankOutlined /></IconButton>
                    <IconButton><Refresh /></IconButton>
                </Box>
                <Divider/>
                <Box className="log-content" sx={{ flex: "2 0 70vh", borderRadius: "0 0 .5em .5em", padding: "1em", overflow: "scroll", backgroundColor: "#212121" }}>
                    <LogProvider>
                        <ListPanel />
                    </LogProvider>
                </Box>
            </Box>
            <LogEntry open={entryOpen} onClose={entryPanelClose} />
        </Box>
    )
}