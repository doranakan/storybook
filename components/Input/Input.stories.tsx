import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  decorators: (Story, { args }) => {
    const [value, setValue] = useState("");
    return (
      <Story
        args={{
          onChangeText: (v) => {
            args.onChangeText?.(v);
            setValue(v);
          },
          value,
        }}
      />
    );
  },
  args: {
    onChangeText: action("onChangeText"),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
