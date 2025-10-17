import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Card',
    component: twig`
        <twig:Card class="max-w-md">
            <twig:Card:Header>
                <twig:Card:Title>Project overview</twig:Card:Title>
                <twig:Card:Description>Monitor progress across your most important metrics.</twig:Card:Description>
            </twig:Card:Header>
            <twig:Card:Content class="space-y-2">
                <p class="text-sm text-muted-foreground">Last synced 5 minutes ago.</p>
                <twig:Progress value="45" />
            </twig:Card:Content>
            <twig:Card:Footer>
                <twig:Button variant="outline">Details</twig:Button>
                <twig:Button>Open</twig:Button>
            </twig:Card:Footer>
        </twig:Card>
    `,
};

export const Default = {};
