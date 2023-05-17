import type { Meta, StoryObj } from '@storybook/react';
import Logo from '.';
import { expect } from '@storybook/jest';
import { styled } from 'styled-components';
import { userEvent, waitFor, within } from '@storybook/testing-library';

const meta: Meta<typeof Logo> = {
    title: 'Logo',
    component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await waitFor(async () => {
            const logo = await canvas.getByText('<JAEIL_JO/>');
            await expect(logo).toHaveAttribute('href', '/');
        });

        await waitFor(async () => {
            await expect;
        });
    },
};
