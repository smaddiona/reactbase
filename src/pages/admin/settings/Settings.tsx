import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { TbCloudCog, TbDatabaseExport, TbDatabaseImport } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaServer, FaUserShield } from "react-icons/fa";
import { MdOutlineBackup, MdKey } from "react-icons/md";
import { FiLock } from "react-icons/fi";

function Settings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    {
      title: "System",
      childs: [
        {
          name: "Application",
          href: "/admin/settings/app",
          icon: TbCloudCog,
        },
        {
          name: "Mail",
          href: "/admin/settings/mail",
          icon: HiOutlineMail,
        },
        {
          name: "File Storage",
          href: "/admin/settings/file",
          icon: FaServer,
        },
        {
          name: "Backups",
          href: "/admin/settings/backups",
          icon: MdOutlineBackup,
        },
      ],
    },
    {
      title: "Sync",
      childs: [
        {
          name: "Export collections",
          href: "/admin/settings/export",
          icon: TbDatabaseExport,
        },
        {
          name: "Import collections",
          href: "/admin/settings/import",
          icon: TbDatabaseImport,
        }
      ],
    },
    {
      title: "Authentication",
      childs: [
        {
          name: "Auth providers",
          href: "/admin/settings/authproviders",
          icon: FiLock,
        },
        {
          name: "Token Options",
          href: "/admin/settings/tokenoptions",
          icon: MdKey,
        },
        {
          name: "Admins",
          href: "/admin/settings/admins",
          icon: FaUserShield,
        }
      ],
    }
  ]);

  return (
    <Fragment>
      <aside className="fixed inset-y-0 left-20 hidden w-56 overflow-y-auto border-r border-zinc-800 xl:block">
        <div className="flex flex-col w-full h-[100dvh] bg-white dark:bg-black">
          <div className="h-full p-2 flex flex-col gap-2">
            {navigation.map((section: any, index: number) => (
              <div className={index === 0 ? "" : "mt-2"}>
                <div className="text-black dark:text-white font-mono my-2 px-2 font-bold">
                  {section.title}
                </div>
                {section.childs.map((item: any) => (
                  <div onClick={() => {navigate(item.href)}} className={`flex flex-row mt-1 justify-start gap-2 text-sm items-center px-4 py-2 rounded-xl ${location.pathname === item.href ? "bg-purple-50 dark:bg-purple-400/10 hover:bg-purple-100 hover:dark:bg-purple-400/20 text-purple-700 dark:text-purple-400 ring-1 ring-inset dark:ring-purple-400/30 ring-purple-700/10" : "bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 hover:dark:bg-zinc-800 text-black dark:text-white"}`}>
                    <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <p className="font-mono">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </aside>
      <div className="xl:pl-56">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Settings;
