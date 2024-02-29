import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
    },
    resolve: {
        alias: [
            {
                find: "@pages",
                replacement: path.resolve(__dirname, "src/pages"),
            },
            {
                find: "@components",
                replacement: path.resolve(__dirname, "src/components"),
            },
            {
                find: "@bootstrap",
                replacement: path.resolve(__dirname, "node_modules/bootstrap"),
            },
        ],
    },
});
