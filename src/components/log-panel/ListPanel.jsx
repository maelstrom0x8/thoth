import { Box } from "@mui/material";
import { useState } from "react";
import { EmptyLog, LogList } from "./LogView";

import { useLogs } from "../../services/Hooks";

export default function ListPanel() {
    const { logs } = useLogs();

    return (
        <Box className="list-panel-container" >
            <Box className="list-content">
                {logs.length ? <LogList logs={logs} /> : <EmptyLog />}
            </Box>
        </Box>
    )
}