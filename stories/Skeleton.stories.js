import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Skeleton',
    component: twig`
        <div class="flex flex-col gap-3">
            <twig:Skeleton class="h-10 w-72 rounded-lg" />
            <twig:Skeleton class="h-4 w-64 rounded-lg" />
            <twig:Skeleton class="h-4 w-56 rounded-lg" />
        </div>
    `,
};

export const Default = {};
