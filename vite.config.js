import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["tomtom-sdk"],
  },
  build: {
    rollupOptions: {
      external: [".sdk/tomtom.min.js"],
    },
  },
});

// module.exports = {
//   // ... altre configurazioni di Vite ...

//   optimizeDeps: {
//     exlude: ["tomtom-sdk"],
//   },
// };
