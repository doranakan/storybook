import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
  title: "Atoms/Title",
  component: Title,
  args: {
    children: "This is a title.",
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
