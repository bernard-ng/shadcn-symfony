import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/Accordion',
    component: twig`
        <twig:Accordion class="rounded-lg border">
            <twig:Accordion:Item>
                <twig:Accordion:Trigger>Is it accessible?</twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Yes. It follows the WAI-ARIA design pattern.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
            <twig:Accordion:Item>
                <twig:Accordion:Trigger>Is it animated?</twig:Accordion:Trigger>
                <twig:Accordion:Content>
                    Yes. Motion is handled by the built-in styles.
                </twig:Accordion:Content>
            </twig:Accordion:Item>
        </twig:Accordion>
    `,
};

export const Default = {};
