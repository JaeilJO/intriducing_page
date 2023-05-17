import type { Meta, StoryObj } from "@storybook/react";
import Main from ".";
import { expect } from "@storybook/jest";
import { styled } from "styled-components";
import { userEvent, waitFor, within } from "@storybook/testing-library";

const meta: Meta<typeof Main> = {
  title: "Main",
  component: Main,
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Default: Story = {
  args: {},
};
