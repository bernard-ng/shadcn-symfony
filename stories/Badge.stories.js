import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Badge',
    component: twig`
        <div class="flex gap-2">
            <twig:Badge>Default</twig:Badge>
            <twig:Badge variant="secondary">Secondary</twig:Badge>
            <twig:Badge variant="outline">Outline</twig:Badge>
        </div>
    `,
};

export const Default = {};
