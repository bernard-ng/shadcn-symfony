import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Switch',
    component: twig`
        <label class="flex items-center gap-3 text-sm">
            <twig:Switch id="dark-mode" />
            <span>Enable dark mode</span>
        </label>
    `,
};

export const Default = {};
