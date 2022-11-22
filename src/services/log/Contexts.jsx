import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LogContext = createContext();

export function LogProvider({ children }) {

    const [logs, setLogs] = useState([]);

    const addEntry = (isubject, ibody) => {
        axios.post("/api/logs/create", {subject: isubject, body: ibody})
        .then(n => setLogs([...logs, n.data]))
    };


    useEffect(() => {
        axios.get('/api/logs')
            .then(res => { setLogs(res.data) })
            .catch(err => { })
    }, [logs]);

    return (
        <LogContext.Provider value={{ logs, addEntry }}>
            {children}
        </LogContext.Provider>
    )
}


