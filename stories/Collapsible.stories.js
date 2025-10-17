import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Collapsible',
    component: twig`
        <twig:Collapsible class="w-80 rounded-lg border p-4">
            <twig:Collapsible:Trigger class="flex w-full items-center justify-between text-sm font-medium">
                Team updates
                <twig:ux:icon name="lucide:chevron-down" class="size-4" />
            </twig:Collapsible:Trigger>
            <twig:Collapsible:Content class="mt-3 space-y-2 text-sm text-muted-foreground">
                <p>Design reviewed the new onboarding flow.</p>
                <p>Engineering shipped improvements to API rate limiting.</p>
            </twig:Collapsible:Content>
        </twig:Collapsible>
    `,
};

export const Default = {};
