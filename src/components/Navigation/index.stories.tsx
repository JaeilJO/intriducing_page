import type { Meta, StoryObj } from '@storybook/react';
import Navigtaion from '.';
import { expect } from '@storybook/jest';
import { styled } from 'styled-components';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof Navigtaion> = {
    title: 'Navigtaion',
    component: Navigtaion,
};

export default meta;
type Story = StoryObj<typeof Navigtaion>;

const mockitems = [
    { key: 1, title: 'link1', target_id: 'link1' },
    { key: 2, title: 'link2', target_id: 'link2' },
];

export const Default: Story = {
    args: { anchors: mockitems },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const link1 = await canvas.getByText('link1');
        expect(link1).toHaveAttribute('href', '#link1');

        const link2 = await canvas.getByText('link2');
        expect(link2).toHaveAttribute('href', '#link2');
    },
};
