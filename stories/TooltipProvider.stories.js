import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/TooltipProvider',
    component: twig`
        <twig:TooltipProvider>
            <div class="flex gap-4">
                <twig:Tooltip>
                    <twig:Tooltip:Trigger class="rounded-md border px-3 py-2 text-sm">Hover me</twig:Tooltip:Trigger>
                    <twig:Tooltip:Content>Provider sets global delay.</twig:Tooltip:Content>
                </twig:Tooltip>
                <twig:Tooltip>
                    <twig:Tooltip:Trigger class="rounded-md border px-3 py-2 text-sm">And me</twig:Tooltip:Trigger>
                    <twig:Tooltip:Content>Tooltips share timing.</twig:Tooltip:Content>
                </twig:Tooltip>
            </div>
        </twig:TooltipProvider>
    `,
};

export const Default = {};
