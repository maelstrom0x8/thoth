import { Route, Routes } from "react-router";
import { SignUp } from "./AuthViews";
import Home from "./Home";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<SignUp />} />
    </Routes>
  )
}