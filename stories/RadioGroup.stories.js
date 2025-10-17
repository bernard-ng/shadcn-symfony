import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/RadioGroup',
    component: twig`
        <twig:RadioGroup value="monthly" class="space-y-2">
            <twig:RadioGroup:Item value="monthly" id="plan-monthly">
                <twig:Label for="plan-monthly">Monthly billing</twig:Label>
            </twig:RadioGroup:Item>
            <twig:RadioGroup:Item value="annual" id="plan-annual">
                <twig:Label for="plan-annual">Annual billing</twig:Label>
            </twig:RadioGroup:Item>
        </twig:RadioGroup>
    `,
};

export const Default = {};
