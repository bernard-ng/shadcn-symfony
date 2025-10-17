import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Empty',
    component: twig`
        <twig:Empty class="max-w-md border">
            <twig:Empty:Header>
                <twig:Empty:Media variant="icon">
                    <twig:ux:icon name="lucide:inbox" />
                </twig:Empty:Media>
                <twig:Empty:Title>No projects yet</twig:Empty:Title>
                <twig:Empty:Description>
                    Create your first project to start collaborating with your team.
                </twig:Empty:Description>
            </twig:Empty:Header>
            <twig:Empty:Content>
                <twig:Button>Create project</twig:Button>
                <twig:Button variant="outline">Import</twig:Button>
            </twig:Empty:Content>
        </twig:Empty>
    `,
};

export const Default = {};
