import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Slider',
    component: twig`
        <div class="w-64 space-y-2">
            <div class="flex justify-between text-sm">
                <span>Volume</span>
                <span>80%</span>
            </div>
            <twig:Slider value=[80] />
        </div>
    `,
};

export const Default = {};
