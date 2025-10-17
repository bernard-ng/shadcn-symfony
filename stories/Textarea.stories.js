import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Textarea',
    component: twig`
        <twig:Textarea rows="4" placeholder="Share feedback about the latest release" />
    `,
};

export const Default = {};
