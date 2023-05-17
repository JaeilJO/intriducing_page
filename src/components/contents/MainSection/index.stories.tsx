import type { Meta, StoryObj } from "@storybook/react";
import MainSection from ".";
import { expect } from "@storybook/jest";
import { styled } from "styled-components";
import { userEvent, waitFor, within } from "@storybook/testing-library";

const meta: Meta<typeof MainSection> = {
  title: "MainSection",
  component: MainSection,
};

export default meta;
type Story = StoryObj<typeof MainSection>;

export const Default: Story = {
  args: {},
};
