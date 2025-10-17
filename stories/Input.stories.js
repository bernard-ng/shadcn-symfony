import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Input',
    component: twig`
        <twig:Input placeholder="Enter your email" type="email" />
    `,
};

export const Default = {};
