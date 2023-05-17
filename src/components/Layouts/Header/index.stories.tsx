import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';
import { expect } from '@storybook/jest';
import { styled } from 'styled-components';
import { userEvent, waitFor, within } from '@storybook/testing-library';

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {},
};
