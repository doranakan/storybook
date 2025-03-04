import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export type ButtonProps = {
  text: string;
  onPress: () => void;

  disabled?: boolean;
  loading?: boolean;
};

const Button = ({ onPress, text, disabled, loading }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 16,
    backgroundColor: "deeppink",
    borderRadius: 8,
  },
  disabled: {
    opacity: 0.7,
  },
  text: { color: "white", fontWeight: 700 },
});

export default Button;
