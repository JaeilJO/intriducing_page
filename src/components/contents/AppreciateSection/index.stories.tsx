import type { Meta, StoryObj } from '@storybook/react';
import AppreciateSection from '.';

const meta: Meta<typeof AppreciateSection> = {
    title: 'AppreciateSection',
    component: AppreciateSection,
};

export default meta;
type Story = StoryObj<typeof AppreciateSection>;

export const Default: Story = {
    args: {},
};
