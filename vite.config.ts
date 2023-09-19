import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
const manifestData = {
  name: "ReactBase",
  short_name: "ReactBase",
  start_url: "/",
  version: "0.0.1",
  display: "standalone",
  background_color: "#000000",
  lang: "en",
  scope: "/",
  icons: [
    {
      src: "assets/images/icons/icon-36.png",
      sizes: "36x36",
      type: "image/png",
    },
    {
      src: "assets/images/icons/icon-48.png",
      sizes: "48x48",
      type: "image/png",
    },
    {
      src: "assets/images/icons/icon-72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      src: "assets/images/icons/icon-96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      src: "assets/images/icons/icon-144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      src: "assets/images/icons/icon-168.png",
      sizes: "168x168",
      type: "image/png",
    },
    {
      src: "assets/images/icons/icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "assets/images/icons/icon-256.png",
      sizes: "256x256",
      type: "image/png",
    },
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: "autoUpdate", manifest: manifestData})],
});
