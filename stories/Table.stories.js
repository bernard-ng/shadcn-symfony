import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Table',
    component: twig`
        <twig:Table containerClass="rounded-lg border">
            <twig:Table:Header>
                <twig:Table:Row>
                    <twig:Table:Head>Invoice</twig:Table:Head>
                    <twig:Table:Head>Status</twig:Table:Head>
                    <twig:Table:Head class="text-right">Amount</twig:Table:Head>
                </twig:Table:Row>
            </twig:Table:Header>
            <twig:Table:Body>
                <twig:Table:Row>
                    <twig:Table:Cell>INV-001</twig:Table:Cell>
                    <twig:Table:Cell>
                        <twig:Badge variant="outline">Paid</twig:Badge>
                    </twig:Table:Cell>
                    <twig:Table:Cell class="text-right">$250.00</twig:Table:Cell>
                </twig:Table:Row>
            </twig:Table:Body>
        </twig:Table>
    `,
};

export const Default = {};
