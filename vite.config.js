import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => ({
    plugins: [react()],

    // 👇 ذكي: لو dev → / ، لو build → /Portfolio/
    base: command === "serve" ? "/" : "/Portfolio/",

    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
        },
    },

    server: {
        host: "0.0.0.0",
        allowedHosts: true,
    },
}));