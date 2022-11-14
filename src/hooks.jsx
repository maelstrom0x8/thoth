import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const LogContext = createContext();

export function LogProvider({ children }) {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get('/api/logs')
            .then(res => { setLogs(res.data) })
            .catch(err => { })
    }, []);

    return (
        <LogContext.Provider value={{ logs }}>
            {children}
        </LogContext.Provider>
    )
}

export const useLogs = () => useContext(LogContext);
