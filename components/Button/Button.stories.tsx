import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: {
    loading: false,
    disabled: false,
    text: "Hello world",
    onPress: action("on-press"),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
