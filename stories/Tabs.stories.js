import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Tabs',
    component: twig`
        <twig:Tabs class="space-y-4">
            <twig:Tabs:List class="w-fit rounded-md border p-1">
                <twig:Tabs:Trigger value="overview">Overview</twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="activity">Activity</twig:Tabs:Trigger>
                <twig:Tabs:Trigger value="settings">Settings</twig:Tabs:Trigger>
            </twig:Tabs:List>
            <twig:Tabs:Content value="overview" class="rounded-md border p-4">
                Overview content
            </twig:Tabs:Content>
            <twig:Tabs:Content value="activity" class="rounded-md border p-4">
                Activity content
            </twig:Tabs:Content>
            <twig:Tabs:Content value="settings" class="rounded-md border p-4">
                Settings content
            </twig:Tabs:Content>
        </twig:Tabs>
    `,
};

export const Default = {};
