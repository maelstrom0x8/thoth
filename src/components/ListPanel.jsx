import { useLogs } from "../hooks";
import { EmptyLog, LogList } from "./LogView";

import { Box } from "@chakra-ui/react";


export default function ListPanel() {
    const { logs } = useLogs();

    return (
        <Box>
            {logs.length ? <LogList logs={logs} /> : <EmptyLog />}
        </Box>
    )
}