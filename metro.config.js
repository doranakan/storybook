// Learn more https://docs.expo.io/guides/customizing-metro
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform
  );

  if (
    !storybookEnabled &&
    //                  put your storybook config folder here👇
    defaultResolveResult?.filePath?.includes?.(".storybook/")
  ) {
    return {
      type: "empty",
    };
  }

  return defaultResolveResult;
};

module.exports = withStorybook(wrapWithReanimatedMetroConfig(config), {
  // Set to false to remove storybook specific options
  // you can also use a env variable to set this
  enabled: storybookEnabled,
  // Path to your storybook config
  configPath: path.resolve(__dirname, "./.storybook"),

  // Optional websockets configuration
  // Starts a websocket server on the specified port and host on metro start
  // websockets: {
  //   port: 7007,
  //   host: 'localhost',
  // },
});
