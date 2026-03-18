/// <reference path="./src/types/skeleton-plugin.d.ts" />
import type { Config } from 'tailwindcss';
import skeletonPlugin from '@skeletonlabs/skeleton/tw-plugin';

const config: Config = {
    content: ['./src/**/*.{html,svelte,js,ts}'],
    theme: {
        extend: {},
    },
    plugins: [skeletonPlugin],
};

export default config;