import {twig} from "@sensiolabs/storybook-symfony-webpack5";

export default {
    title: 'Components/AspectRatio',
    component: twig`
        <twig:AspectRatio ratio="16 / 9" class="rounded-lg bg-muted">
            <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&dpr=2&q=80"
                alt="Workstation"
                class="h-full w-full rounded-lg object-cover"
            />
        </twig:AspectRatio>
    `,
};

export const Default = {};
