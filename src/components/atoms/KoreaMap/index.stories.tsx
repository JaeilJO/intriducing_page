import type { Meta, StoryObj } from '@storybook/react';
import KoreaMap from '.';
import { expect } from '@storybook/jest';
import { styled } from 'styled-components';
import { userEvent, waitFor, within } from '@storybook/testing-library';

const meta: Meta<typeof KoreaMap> = {
    title: 'KoreaMap',
    component: KoreaMap,
};

export default meta;
type Story = StoryObj<typeof KoreaMap>;

export const Default: Story = {
    args: {},
};
