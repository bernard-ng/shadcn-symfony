import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Kbd',
    component: twig`
        <div class="flex flex-col gap-3">
            <twig:Kbd:Group>
                <twig:Kbd>⌘</twig:Kbd>
                <twig:Kbd>K</twig:Kbd>
            </twig:Kbd:Group>
            <twig:Kbd:Group>
                <twig:Kbd>Shift</twig:Kbd>
                <twig:Separator orientation="vertical" class="h-4" />
                <twig:Kbd>?</twig:Kbd>
            </twig:Kbd:Group>
        </div>
    `,
};

export const Default = {};
