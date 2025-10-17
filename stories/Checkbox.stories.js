import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Checkbox',
    component: twig`
        <label class="flex items-center gap-3 text-sm">
            <twig:Checkbox id="newsletter" />
            <span>Subscribe to the product newsletter</span>
        </label>
    `,
};

export const Default = {};
