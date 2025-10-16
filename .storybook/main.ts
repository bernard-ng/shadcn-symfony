import type { StorybookConfig } from "@sensiolabs/storybook-symfony-webpack5";

const config: StorybookConfig = {
    stories: ["../stories/**/*.stories.[tj]s", "../stories/**/*.mdx"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ],
    framework: {
        name: "@sensiolabs/storybook-symfony-webpack5",
        options: {
            // 👇 Here configure the framework
            symfony: {
                server: 'http://localhost:8000',
                proxyPaths: [
                    '/assets',
                    '/public',
                ],
                additionalWatchPaths: [
                    'assets',
                    'public/build/**/*'
                ]
            }
        },
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
