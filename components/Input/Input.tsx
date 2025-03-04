import { ComponentProps } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../Card";

type InputProps = Pick<
  ComponentProps<typeof TextInput>,
  "onChangeText" | "value"
>;

const Input = ({ onChangeText, value }: InputProps) => {
  return (
    <Card>
      <View style={styles.container}>
        <Text>✏️</Text>
        <TextInput
          placeholder="Insert text"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
});

export default Input;
