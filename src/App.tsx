import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./pages/AuthLayout";
import Layout from "./pages/Layout";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import Register from "./pages/auth/Register";
import Installer from "./pages/auth/Installer";
import Collections from "./pages/admin/Collections";
import Settings from "./pages/admin/settings/Settings";
import Logs from "./pages/admin/Logs";
import Manage from "./pages/admin/Manage";
import MailSettings from "./pages/admin/settings/MailSettings";
import FileStorageSettings from "./pages/admin/settings/FileStorageSettings";
import BackupSettings from "./pages/admin/settings/BackupSettings";
import ApplicationSettings from "./pages/admin/settings/ApplicationSettings";
import ExportCollections from "./pages/admin/settings/ExportCollections";
import ImportCollections from "./pages/admin/settings/ImportCollections";
import AuthProviders from "./pages/admin/settings/AuthProviders";
import TokenOptions from "./pages/admin/settings/TokenOptions";
import Admins from "./pages/admin/settings/Admins";

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

        <Route path="/admin" element={<AuthLayout />}>
          <Route path="/admin" element={<Navigate to={"/admin/dashboard"} />} />
          <Route path="/admin/collections" element={<Collections />} />
          <Route path="/admin/logs" element={<Logs />} />
          <Route path="/admin/manage" element={<Manage />} />
          <Route path="/admin/settings" element={<Settings />}>
            <Route path="/admin/settings" element={<Navigate to={"/admin/settings/app"} />} />
            {/*System section*/}
            <Route path="/admin/settings/app" element={<ApplicationSettings />} />
            <Route path="/admin/settings/mail" element={<MailSettings />} />
            <Route path="/admin/settings/file" element={<FileStorageSettings />} />
            <Route path="/admin/settings/backups" element={<BackupSettings />} />
            {/*Sync section*/}
            <Route path="/admin/settings/export" element={<ExportCollections />} />
            <Route path="/admin/settings/import" element={<ImportCollections />} />
            {/*Authentication section*/}
            <Route path="/admin/settings/authproviders" element={<AuthProviders />} />
            <Route path="/admin/settings/tokenoptions" element={<TokenOptions />} />
            <Route path="/admin/settings/admins" element={<Admins />} />

          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
