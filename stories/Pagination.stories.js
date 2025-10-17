import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Pagination',
    component: twig`
        <twig:Pagination>
            <twig:Pagination:Content>
                <twig:Pagination:Previous href="#" />
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#">1</twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#" isActive=true>2</twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#">3</twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Ellipsis />
                <twig:Pagination:Item>
                    <twig:Pagination:Link href="#">8</twig:Pagination:Link>
                </twig:Pagination:Item>
                <twig:Pagination:Next href="#" />
            </twig:Pagination:Content>
        </twig:Pagination>
    `,
};

export const Default = {};
