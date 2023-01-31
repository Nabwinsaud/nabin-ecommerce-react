import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@schema": path.resolve(__dirname, "./src/schema"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
