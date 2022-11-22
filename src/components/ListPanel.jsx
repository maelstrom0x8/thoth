import { useLogs } from "../services/Hooks";
import { EmptyLog, LogList } from "./LogView";

import { Box } from "@mui/material";



export default function ListPanel() {
    const { logs } = useLogs();

    return (
        <Box className="list-panel-container" sx={{backgroundColor: "#212121", color: "#eee"}}>
            <Box className="list-content">
                {logs.length ? <LogList logs={logs} /> : <EmptyLog />}
            </Box>
        </Box>
    )
}