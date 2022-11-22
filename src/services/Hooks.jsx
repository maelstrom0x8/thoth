import { useContext } from "react";
import { LogContext } from "./log/Contexts";


export const useLogs = () => useContext(LogContext);