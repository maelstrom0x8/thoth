import { Route, Routes } from "react-router";

import Home from "./Home";
import SignUp from "./AuthViews/SignUp";
import SignIn from "./AuthViews/SignIn"

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<SignUp />} />
      <Route path="login" element={<SignIn />} />
    </Routes>
  )
}