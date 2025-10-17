import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Popover',
    component: twig`
        <twig:Popover>
            <twig:Popover:Trigger tag="twig:Button" variant="outline">
                Share
            </twig:Popover:Trigger>
            <twig:Popover:Content class="w-60 space-y-2">
                <h3 class="text-sm font-semibold">Invite teammates</h3>
                <p class="text-sm text-muted-foreground">Send invitations directly from the app.</p>
                <twig:Input placeholder="Add email" />
            </twig:Popover:Content>
        </twig:Popover>
    `,
};

export const Default = {};
