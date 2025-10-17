import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Label',
    component: twig`
        <div class="flex flex-col gap-2">
            <twig:Label for="label-input">Project name</twig:Label>
            <twig:Input id="label-input" placeholder="Moonshot" />
        </div>
    `,
};

export const Default = {};
