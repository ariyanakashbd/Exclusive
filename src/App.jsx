import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import MainLayout from "./components/layouts/MainLayout";
function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
         <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
    </>
  )            
}

export default App
