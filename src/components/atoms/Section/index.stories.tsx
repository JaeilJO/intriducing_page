import type { Meta, StoryObj } from "@storybook/react";
import Section from ".";
import { expect } from "@storybook/jest";
import { styled } from "styled-components";
import { userEvent, waitFor, within } from "@storybook/testing-library";

const meta: Meta<typeof Section> = {
  title: "Section",
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {},
};
