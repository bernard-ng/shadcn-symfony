import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Tooltip',
    component: twig`
        <twig:Tooltip>
            <twig:Tooltip:Trigger class="rounded-md border px-3 py-2 text-sm">Hover me</twig:Tooltip:Trigger>
            <twig:Tooltip:Content>Tooltips provide helpful context.</twig:Tooltip:Content>
        </twig:Tooltip>
    `,
};

export const Default = {};
