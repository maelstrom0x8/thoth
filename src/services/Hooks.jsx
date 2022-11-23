import { useContext } from "react";
import { LogContext } from "./log/Contexts";


export const useLogs = () => useContext(LogContext);

export const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    };

    return inputProps;
}
