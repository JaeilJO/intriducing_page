import type { Meta, StoryObj } from '@storybook/react';
import FromSection from '.';

const meta: Meta<typeof FromSection> = {
    title: 'FromSection',
    component: FromSection,
};

export default meta;
type Story = StoryObj<typeof FromSection>;

export const Default: Story = {
    args: {},
};
