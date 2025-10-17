import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/ScrollArea',
    component: twig`
        <twig:ScrollArea class="h-48 w-64 rounded-lg border">
            <twig:ScrollArea:Viewport>
                <div class="space-y-2 p-4 text-sm">
                    {% for i in 1..10 %}
                        <div class="rounded-md border p-3">Item {{ i }}</div>
                    {% endfor %}
                </div>
            </twig:ScrollArea:Viewport>
            <twig:ScrollArea:Scrollbar orientation="vertical" />
        </twig:ScrollArea>
    `,
};

export const Default = {};
