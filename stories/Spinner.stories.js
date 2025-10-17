import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Spinner',
    component: twig`
        <div class="flex items-center gap-3">
            <twig:Spinner class="size-5 text-primary" label="Loading" />
            <span class="text-sm text-muted-foreground">Loading data…</span>
        </div>
    `,
};

export const Default = {};
