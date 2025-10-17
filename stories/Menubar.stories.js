import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Menubar',
    component: twig`
        <twig:Menubar class="w-full max-w-lg rounded-lg border p-1">
            <twig:Menubar:Menu>
                <twig:Menubar:Trigger>File</twig:Menubar:Trigger>
                <twig:Menubar:Content>
                    <twig:Menubar:Item>New Tab</twig:Menubar:Item>
                    <twig:Menubar:Item>Open...</twig:Menubar:Item>
                    <twig:Menubar:Separator />
                    <twig:Menubar:Item>Save as...</twig:Menubar:Item>
                </twig:Menubar:Content>
            </twig:Menubar:Menu>
            <twig:Menubar:Menu>
                <twig:Menubar:Trigger>Edit</twig:Menubar:Trigger>
                <twig:Menubar:Content>
                    <twig:Menubar:CheckboxItem checked=true>Show status bar</twig:Menubar:CheckboxItem>
                    <twig:Menubar:Item>Find</twig:Menubar:Item>
                </twig:Menubar:Content>
            </twig:Menubar:Menu>
        </twig:Menubar>
    `,
};

export const Default = {};
