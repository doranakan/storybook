import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
});

export default Card;
