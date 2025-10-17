import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Field',
    component: twig`
        <div class="space-y-4">
            <twig:Field>
                <twig:Field:Label for="full-name">Full name</twig:Field:Label>
                <twig:Field:Content>
                    <twig:Input id="full-name" placeholder="Ada Lovelace" />
                </twig:Field:Content>
                <twig:Field:Description>Used across the product for personalization.</twig:Field:Description>
            </twig:Field>
            <twig:Field orientation="horizontal">
                <twig:Field:Label for="field-switch">Enable alerts</twig:Field:Label>
                <twig:Field:Content>
                    <twig:Switch id="field-switch" />
                </twig:Field:Content>
            </twig:Field>
        </div>
    `,
};

export const Default = {};
