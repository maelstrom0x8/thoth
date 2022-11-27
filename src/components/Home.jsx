import { useState } from "react";

import { Box, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

import LogPanel from "./LogPanel";
import Entry from "./Entry";

export default function Home() {

    const [entryOpen, setEntryOpen] = useState(false);

    const entryPanelOpen = () => {
        setEntryOpen(true);
    }

    const entryPanelClose = () => {
        setEntryOpen(false);
    }

    return (
        <>
            <Box className="home-container"
                backgroundColor={blue[50]}
                sx={{ display: "flex", justifyContent: "left", position: "fixed", top: "0", bottom: "0", right: "0", left: "0" }}>
                <Box className="container-item side" sx={{ padding: "1em", marginRight: ".2em", marginTop: "3em" }}>

                    <Paper elevation={4} sx={{ justifyItems: "baseline",  padding: "1em", borderRadius: ".6em " ,backgroundColor: "white", color: "#212121"}} onClick={entryPanelOpen} component={"button"}><Add />New Log Entry</Paper>
                    {/* @TODO Add logo here */}
                    {/* <Button id="add-button" onClick={entryPanelOpen} endIcon={<Add />}>New Log Entry</Button> */}
                </Box>

                {/* Log panel goes here */}

                <LogPanel/>
            </Box>
            <Entry open={entryOpen} onClose={entryPanelClose} />
        </>
    )
}