import { Box, List } from "@chakra-ui/react";



export function EmptyLog() {
    return (
        <Box>
            <p>Sorry, No Logs</p>
        </Box>
    )
}

export function LogList({ logs = [] }) {
    return (
        <Box>
            <List>

            </List>
        </Box>
    )
}