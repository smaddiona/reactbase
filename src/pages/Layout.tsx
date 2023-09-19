import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
      <Toaster />
      <Outlet />
    </div>
  );
}

export default Layout;
