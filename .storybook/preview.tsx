import type { Preview } from "@storybook/react";
import React from "react";
import { View } from "react-native";

const Decorator = (Story: () => JSX.Element) => (
  <View
    style={{
      padding: 16,
      alignItems: "flex-start",
      flex: 1,
      backgroundColor: "#f5f5f5",
    }}
  >
    <Story />
  </View>
);

const preview: Preview = {
  decorators: Decorator,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
