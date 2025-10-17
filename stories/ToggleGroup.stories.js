import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/ToggleGroup',
    component: twig`
        <twig:ToggleGroup type="multiple" class="gap-2">
            <twig:ToggleGroup:Item value="grid" aria-label="Grid view">
                <twig:ux:icon name="lucide:layout-grid" />
            </twig:ToggleGroup:Item>
            <twig:ToggleGroup:Item value="list" aria-label="List view" pressed=true>
                <twig:ux:icon name="lucide:list" />
            </twig:ToggleGroup:Item>
            <twig:ToggleGroup:Item value="kanban" aria-label="Kanban view">
                <twig:ux:icon name="lucide:panel-left" />
            </twig:ToggleGroup:Item>
        </twig:ToggleGroup>
    `,
};

export const Default = {};
