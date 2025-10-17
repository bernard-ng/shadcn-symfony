import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Alert',
    component: twig`
        <twig:Alert>
            <twig:ux:icon name="lucide:info" />
            <twig:Alert:Title>Heads up!</twig:Alert:Title>
            <twig:Alert:Description>
                You can add components to your application library for quick reuse.
            </twig:Alert:Description>
        </twig:Alert>
    `,
};

export const Default = {};
