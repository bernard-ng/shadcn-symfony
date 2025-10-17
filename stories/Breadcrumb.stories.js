import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Breadcrumb',
    component: twig`
        <twig:Breadcrumb>
            <twig:Breadcrumb:List>
                <twig:Breadcrumb:Item>
                    <twig:Breadcrumb:Link href="#">Dashboard</twig:Breadcrumb:Link>
                </twig:Breadcrumb:Item>
                <twig:Breadcrumb:Separator />
                <twig:Breadcrumb:Item>
                    <twig:Breadcrumb:Link href="#">Library</twig:Breadcrumb:Link>
                </twig:Breadcrumb:Item>
                <twig:Breadcrumb:Separator />
                <twig:Breadcrumb:Item>
                    <twig:Breadcrumb:Page>Data</twig:Breadcrumb:Page>
                </twig:Breadcrumb:Item>
            </twig:Breadcrumb:List>
        </twig:Breadcrumb>
    `,
};

export const Default = {};
