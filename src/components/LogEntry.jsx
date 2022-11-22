
import { Backdrop, Box, Button, IconButton, TextField, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';



export default function LogEntry({ open, onClose }) {

    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = () => {
        if (subject && body) {
            //addEntry(subject, body);
        }
    }

    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: "fixed" }}
            open={open}>
            <Box className="entry-modal-body" sx={{ position: "absolute", right: "1em", bottom: "1em", top: "10em", width: "75%", backgroundColor: "primary.main", borderRadius: ".3em .3em" }}>
                <Box className="header" sx={{ display: "flex", justifyContent: "flex-start", backgroundColor: "#eee", color: "primary.main", borderRadius: ".5em .5em 0 0", padding: ".2em 0 0 .5em" }}>
                    <Typography >New Entry</Typography>
                    <IconButton sx={{ marginLeft: "auto", padding: 0 }} onClick={onClose} size="large"><CloseIcon /></IconButton>
                </Box>

                <Box className="modal-content" sx={{ display: "flex", flexDirection: "column", padding: ".1em", justifyContent: "space-evenly" }}>

                    <TextField className='subject-input' sx={{color: "white"}}  id="standard-basic" fullWidth placeholder="Subject" variant="standard" onChange={e => { setSubject(e.target.value) }} />

                    <Box className="body-input-box" component={"textarea"} sx={{ resize: "none", flex: "2 0 75%" }} onChange={e => { setBody(e.target.value) }} />

                    <Box className="modal-footer" sx={{ marginTop: ".7em" }}>
                        <Button className="log-button" onClick={handleSubmit}>Log</Button>
                    </Box>
                </Box>
            </Box>
        </Backdrop>

    );
}
