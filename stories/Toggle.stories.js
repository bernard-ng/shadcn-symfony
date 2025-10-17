import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Toggle',
    component: twig`
        <div class="flex gap-3">
            <twig:Toggle aria-label="Toggle bold" class="h-9 w-9">
                <twig:ux:icon name="lucide:bold" />
            </twig:Toggle>
            <twig:Toggle pressed=true aria-label="Toggle italic" class="h-9 w-9">
                <twig:ux:icon name="lucide:italic" />
            </twig:Toggle>
        </div>
    `,
};

export const Default = {};
