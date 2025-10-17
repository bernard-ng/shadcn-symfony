import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/ButtonGroup',
    component: twig`
        <twig:ButtonGroup>
            <twig:ButtonGroup:Text>
                <twig:ux:icon name="lucide:wand" />
                Quick actions
            </twig:ButtonGroup:Text>
            <twig:ButtonGroup:Separator />
            <twig:Button variant="outline">Preview</twig:Button>
            <twig:Button>Publish</twig:Button>
        </twig:ButtonGroup>
    `,
};

export const Default = {};
