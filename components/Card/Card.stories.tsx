import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";
import Card from "./Card";

const meta = {
  title: "Atoms/Card",
  component: Card,
  decorators: (Story) => (
    <Story args={{ children: <Text>This is a Card</Text> }} />
  ),
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
