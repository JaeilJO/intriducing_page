import type { Meta, StoryObj } from '@storybook/react';
import Navigtaion from '.';
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
};

const MockItemMain = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    font-size: 20px;
`;

export const MoveAnchor: Story = {
    render: () => (
        <>
            <Navigtaion anchors={mockitems} />
            {mockitems.map((item) => (
                <MockItemMain key={item.key} id={item.target_id}>
                    Main{item.key}
                </MockItemMain>
            ))}
        </>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const link1 = canvas.getByText('link1');
        const link2 = canvas.getByText('link2');
    },
};
