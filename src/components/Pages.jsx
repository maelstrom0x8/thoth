import { Box, Button } from "@chakra-ui/react";
import { LogProvider } from "../hooks";
import ListPanel from "./ListPanel";



export function Home() {
    return (
        <Box>
            <LogProvider>
                <ListPanel />
            </LogProvider>
        </Box>
    );
}