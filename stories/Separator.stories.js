import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Separator',
    component: twig`
        <div class="w-64 space-y-4 text-sm">
            <p class="font-medium">Profile</p>
            <twig:Separator />
            <p class="text-muted-foreground">Update your personal information and preferences.</p>
        </div>
    `,
};

export const Default = {};
