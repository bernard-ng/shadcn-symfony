import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Progress',
    component: twig`
        <div class="w-64 space-y-2">
            <div class="flex items-center justify-between text-sm">
                <span>Uploading</span>
                <span>65%</span>
            </div>
            <twig:Progress value="65" />
        </div>
    `,
};

export const Default = {};
