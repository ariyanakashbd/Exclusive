import { Routes, Route } from "react-router"; 
import Home from "./pages/Home";
import SignUp from "./pages/SingUp"; 
import MainLayout from "./components/layouts/MainLayout";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Routes>
      
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/all-products" element={<Category />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;