import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../Styles/Colors"
import { FontSizes } from "../../Styles/FontSizes"; 
import { Spacing } from "../../Styles/Spacing";  

export const AuthInput = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
          {label}
        </Text>
      </View>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  labelContainer: {
    marginBottom: Spacing.medium,
    borderBottomRightRadius: Spacing.medium,
    borderTopLeftRadius: Spacing.medium,
    padding: Spacing.small,
    backgroundColor: Colors.blackAlpha,
    width: 130,
   
  },
  label: {
    fontSize: FontSizes.medium,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.blueMediumAlhpa,
  },
  labelInvalid: {
    color: "#F3699F",
  },
  input: {
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
    marginHorizontal: Spacing.medium,
    marginVertical: Spacing.small,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: Colors.orangeLighter,
    borderRadius: Spacing.medium,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: "#F3699F",
  },
});
