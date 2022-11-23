
import { createContext, useState } from "react";


export const AuthContext = createContext(null);


export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(
        { username: "", password: "", email: "" }
    );
    const persistUser = useState(false);

    const loginSuccess = (username, password) => {
        persistUser && localStorage.setItem("username", user.username)
            && localStorage.setItem("password", user.password);
    }

    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = (username, password) => {
        axios.post("/api/account/login", { username: user.username, password: user.password })
            .then(res => { res.status === 200 && loginSuccess(user.username, user.password) })
    }

    const register = (username, email, password) => {
        axios.post("/api/account/register", { username: user.username, email: user.email })
    }

    return (
        <AuthenticationContext.Provider value={{ user, setUser, login, register, isLoggedIn }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
