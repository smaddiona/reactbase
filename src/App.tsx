import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./pages/AuthLayout";
import Layout from "./pages/Layout";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import Register from "./pages/auth/Register";
import Installer from "./pages/auth/Installer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/installer" element={<Installer />}></Route>
        </Route>

        <Route path="/admin" element={<AuthLayout />}></Route>
        <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
