import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Item',
    component: twig`
        <twig:Item:Group class="max-w-xl gap-3">
            <twig:Item variant="outline">
                <twig:Item:Media variant="icon">
                    <twig:ux:icon name="lucide:bell" />
                </twig:Item:Media>
                <twig:Item:Content>
                    <twig:Item:Header>
                        <twig:Item:Title>Notifications</twig:Item:Title>
                        <twig:Item:Actions>
                            <twig:Button variant="ghost" size="icon" aria-label="Open">
                                <twig:ux:icon name="lucide:ellipsis" />
                            </twig:Button>
                        </twig:Item:Actions>
                    </twig:Item:Header>
                    <twig:Item:Description>Control alerts for comments and mentions.</twig:Item:Description>
                    <twig:Item:Footer class="text-xs text-muted-foreground">Updated 1 hour ago</twig:Item:Footer>
                </twig:Item:Content>
            </twig:Item>
        </twig:Item:Group>
    `,
};

export const Default = {};
