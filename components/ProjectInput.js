import { View, Text, TextInput, StyleSheet } from "react-native";

/* Styling fom Styles-folder */

import { Spacing } from "../Styles/Spacing";
import { Colors } from "../Styles/Colors";
import { FontSizes } from "../Styles/FontSizes";

export const ProjectInput = ({ labelText, inValid, textInputConfig }) => {
  //TextInputConfig. Spreading and merging all textInputConfig into one object

  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }
  if (inValid) {
    inputStyle.push(styles.inValidInput);
  }

  return (
    <View>
      <View style={styles.titelBox}>
        <Text style={[styles.titles, inValid && styles.invalidLabel]}>
          {labelText}
        </Text>
      </View>
      <View>
        <TextInput style={inputStyle} {...textInputConfig} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: Spacing.medium,
    borderRadius: Spacing.medium,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: Colors.orangeLighter,
    height: 40,
    minWidth: 150,
    marginHorizontal: Spacing.large,
    marginVertical: Spacing.small,
  },
  titelBox: {
    borderBottomRightRadius: Spacing.medium,
    borderTopLeftRadius: Spacing.medium,
    padding: Spacing.small,
    backgroundColor: Colors.blackAlpha,
    width: 130,
    marginLeft: Spacing.large,
  },
  titles: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSizes.medium,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.blueMediumAlhpa,
  },
  inputMultiline: {
    textAlignVertical: "top",
    paddingTop: Spacing.medium,
    height: 100,
  },
  inValidInput: {
    borderColor: "#FFD2E4",
    borderWidth: "2",
    backgroundColor: "#F3699F",
  },
  invalidLabel: {
    color: "#F3699F",
  },
});
