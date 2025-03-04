import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }: PropsWithChildren) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 700,
  },
});

export default Title;
