import type { Meta, StoryObj } from "@storybook/react";
import Post from "./Post";

const meta = {
  title: "Molecules/Post",
  component: Post,
  args: {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: "Yesterday",
    title: "This is a post.",
  },
} satisfies Meta<typeof Post>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const Image: Story = {
  args: {
    title: "This is an image post.",
    image:
      "https://www.zooplus.it/magazine/wp-content/uploads/2019/01/welsh-corgi-pembroke-l%C3%A4chelt.jpg",
  },
};
