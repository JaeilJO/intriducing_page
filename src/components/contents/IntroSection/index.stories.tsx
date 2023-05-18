import type { Meta, StoryObj } from '@storybook/react';
import IntroSection from '.';
import { expect } from '@storybook/jest';
import { styled } from 'styled-components';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import Section from '@/components/atoms/Section';

const meta: Meta<typeof IntroSection> = {
    title: 'IntroSection',
    component: IntroSection,
};

export default meta;
type Story = StoryObj<typeof IntroSection>;

const MockSection = styled.section`
    padding: 10px 20px;
    min-height: 1000px;
    position: relative;

    @media screen and (max-width: 1000px) {
        padding: 10px 2%;
    }
`;

export const Default: Story = {
    args: {},
    decorators: [
        (Story) => (
            <MockSection>
                <Story />
            </MockSection>
        ),
    ],
};
