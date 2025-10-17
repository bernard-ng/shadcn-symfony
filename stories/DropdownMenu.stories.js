import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/DropdownMenu',
    component: twig`
        <twig:DropdownMenu>
            <twig:DropdownMenu:Trigger class="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-xs">
                Options
                <twig:ux:icon name="lucide:chevron-down" class="size-4" />
            </twig:DropdownMenu:Trigger>
            <twig:DropdownMenu:Content class="w-56">
                <twig:DropdownMenu:Label>Appearance</twig:DropdownMenu:Label>
                <twig:DropdownMenu:Separator />
                <twig:DropdownMenu:CheckboxItem checked=true>Show sidebar</twig:DropdownMenu:CheckboxItem>
                <twig:DropdownMenu:CheckboxItem>Show status bar</twig:DropdownMenu:CheckboxItem>
                <twig:DropdownMenu:Separator />
                <twig:DropdownMenu:RadioGroup value="system">
                    <twig:DropdownMenu:RadioItem value="light">Light</twig:DropdownMenu:RadioItem>
                    <twig:DropdownMenu:RadioItem value="dark">Dark</twig:DropdownMenu:RadioItem>
                    <twig:DropdownMenu:RadioItem value="system">System</twig:DropdownMenu:RadioItem>
                </twig:DropdownMenu:RadioGroup>
            </twig:DropdownMenu:Content>
        </twig:DropdownMenu>
    `,
};

export const Default = {};
