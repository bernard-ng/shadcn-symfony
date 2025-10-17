import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Avatar',
    component: twig`
        <twig:Avatar class="size-12">
            <twig:Avatar:Image src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=120&h=120&fit=crop" alt="Avatar" />
            <twig:Avatar:Fallback>AL</twig:Avatar:Fallback>
        </twig:Avatar>
    `,
};

export const Default = {};
