import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/HoverCard',
    component: twig`
        <twig:HoverCard>
            <twig:HoverCard:Trigger tag="twig:Button" variant="link" class="gap-2">
                <twig:ux:icon name="lucide:rocket" />
                Launch checklist
            </twig:HoverCard:Trigger>
            <twig:HoverCard:Content class="w-64 space-y-2">
                <h3 class="text-sm font-semibold">Product release</h3>
                <p class="text-sm text-muted-foreground">
                    Review QA, confirm documentation, and announce the update to your customers.
                </p>
            </twig:HoverCard:Content>
        </twig:HoverCard>
    `,
};

export const Default = {};
