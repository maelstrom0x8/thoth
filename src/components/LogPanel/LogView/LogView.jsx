import { Box } from "@mui/material";

import { LogListView } from "./LogListView";
import { EmptyLogView } from "./EmptyLogView";

export const LogView = ({ logs = [] }) => {
    return (
        <Box>
            {logs.length ? <LogListView /> : <EmptyLogView />}
        </Box>
    )
}