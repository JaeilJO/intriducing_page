import type { Meta, StoryObj } from '@storybook/react';
import FromSlide from '.';

const meta: Meta<typeof FromSlide> = {
    title: 'FromSlide',
    component: FromSlide,
};

export default meta;
type Story = StoryObj<typeof FromSlide>;

export const Default: Story = {
    args: {},
};
