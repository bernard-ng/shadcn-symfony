import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Sheet',
    component: twig`
        <twig:Sheet>
            <twig:Sheet:Trigger tag="twig:Button" variant="outline">Open sheet</twig:Sheet:Trigger>
            <twig:Sheet:Content class="sm:max-w-lg">
                <twig:Sheet:Header>
                    <twig:Sheet:Title>Edit profile</twig:Sheet:Title>
                    <twig:Sheet:Description>Make changes to your profile information.</twig:Sheet:Description>
                </twig:Sheet:Header>
                <div class="grid gap-4 py-4">
                    <twig:Input placeholder="Name" />
                    <twig:Input placeholder="Username" />
                </div>
                <twig:Sheet:Footer>
                    <twig:Sheet:Close class="h-9 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground">
                        Close
                    </twig:Sheet:Close>
                    <twig:Button>Save</twig:Button>
                </twig:Sheet:Footer>
            </twig:Sheet:Content>
        </twig:Sheet>
    `,
};

export const Default = {};
