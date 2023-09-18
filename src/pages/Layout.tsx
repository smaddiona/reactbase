import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Configs from "./auth/Configs";
import { Toaster } from "react-hot-toast";

function Layout() {
  const [configs, setConfigs] = useState();

  useEffect(() => {
    let conf = localStorage.getItem("pb_config");

    if (conf) {
      setConfigs(JSON.parse(conf));
    }
  }, []);

  if (configs) {
    return (
      <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
        <Toaster />
        <Outlet />
      </div>
    );
  }

  return <Configs />;
}

export default Layout;
