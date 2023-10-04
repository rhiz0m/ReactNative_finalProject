import { Text, View, TouchableHighlight, StyleSheet } from "react-native"
import { Spacing } from "../Spacing";
import { FontSizes } from "../FontSizes";


export const SecondaryBtn = ({ onPress, title, style}) => {
    return (
      <View>
        <TouchableHighlight onPress={onPress} style={styles.btn}>
          <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
  btn: {
    marginVertical: Spacing.medium,
    paddingHorizontal: Spacing.medium,
    maxWidth: 150,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: Spacing.xsmall,
    BorderColor: "black",
    borderWidth: 2,
  },
  text: {
    margin: Spacing.small,
    fontSize: FontSizes.medium,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
