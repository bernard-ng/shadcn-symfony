import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    component: twig`
        <twig:Button label="{{ label }}" variant="{{ variant }}" size="{{ size }}">
            {{ label }}
        </twig:Button>
    `,
    args: {
        label: 'World',
        variant: 'primary',
        size: 'md'
    }
}

export const Primary = {}

export const Secondary = {
    args: {
        variant: 'secondary'
    }
}
