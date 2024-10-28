import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/components/theme-provider'; // Adjust the path as necessary
import Layout from './Layouts/Layout';


const appName = import.meta.env.VITE_APP_NAME || 'Excha';

createInertiaApp({
    title: (title: string) => `${title} - ${appName}`,
    resolve: (name: string) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        let page: any = pages[`./Pages/${name}.tsx`];

        page.default.layout = page.default.layout || ((pageProps: any) => <Layout>{pageProps}</Layout>);

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
