import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/InputGroup',
    component: twig`
        <twig:InputGroup class="max-w-md">
            <twig:InputGroup:Addon align="inline-start">https://</twig:InputGroup:Addon>
            <twig:InputGroup:Input placeholder="acme.com" />
            <twig:InputGroup:Button>Check</twig:InputGroup:Button>
        </twig:InputGroup>
    `,
};

export const Default = {};
