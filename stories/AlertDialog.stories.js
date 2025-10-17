import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/AlertDialog',
    component: twig`
        <twig:AlertDialog>
            <twig:AlertDialog:Trigger tag="twig:Button" variant="destructive">
                Delete account
            </twig:AlertDialog:Trigger>
            <twig:AlertDialog:Content>
                <twig:AlertDialog:Header>
                    <twig:AlertDialog:Title>Are you absolutely sure?</twig:AlertDialog:Title>
                    <twig:AlertDialog:Description>
                        This action cannot be undone. Your account will be permanently removed.
                    </twig:AlertDialog:Description>
                </twig:AlertDialog:Header>
                <twig:AlertDialog:Footer>
                    <twig:AlertDialog:Cancel>Cancel</twig:AlertDialog:Cancel>
                    <twig:AlertDialog:Action>Continue</twig:AlertDialog:Action>
                </twig:AlertDialog:Footer>
            </twig:AlertDialog:Content>
        </twig:AlertDialog>
    `,
};

export const Default = {};
