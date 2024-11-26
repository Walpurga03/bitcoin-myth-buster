import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as sass from 'sass';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/bitcoin-myth-buster/',
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
                logger: {
                    warn: function () { } // Deaktiviert Warnungen
                }
            }
        }
    }
});
