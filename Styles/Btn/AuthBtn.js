import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontSizes } from "../FontSizes";
import { Spacing } from "../Spacing";

export const AuthBtn = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.small,
  },
  pressed: {
    opacity: 0.7,
  },
  btnText: {
    textAlign: "center",
    fontSize: FontSizes.medium,
    letterSpacing: Spacing.xsmall,
    color: "black",
    fontWeight: "bold"
  },
});
