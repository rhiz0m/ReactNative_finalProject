import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

/* Components */

import { DateFormatted } from "../utils/DateFormatted";

/* Styling fom Styles-folder */
import { Colors } from "../Styles/Colors";
import { FontSizes } from "../Styles/FontSizes";
import { Spacing } from "../Styles/Spacing";

//Object Destructuring in parameter
export const ProjectItems = ({ id, task, description, priority, date }) => {
  const navigation = useNavigation();

  const projectPressHandler = () => {
    navigation.navigate("Edit Projects", { projectId: id });
  };

  return (
    <View style={styles.listOutputContainer}>
      <View>
        <View style={styles.btnRowsStyle}>
          <Text style={styles.title}>{`◄♦ ${task} ♦►`}</Text>
          <View style={styles.IconEditBtn}>
            <FontAwesome
              name="edit"
              size={24}
              color={Colors.orangeLighter}
              onPress={projectPressHandler}
            />
          </View>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.subTitle}>► Description:</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.subTitle}>► Priority:</Text>
          <Text style={styles.text}>{priority}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.subTitle}>► Date:</Text>
          <Text style={styles.text}>{DateFormatted(date)}</Text>
        </View>
      </View>
    </View>
  );
};
// <IconEditBtn />
const styles = StyleSheet.create({
  listOutputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    paddingBottom: Spacing.medium,
    marginHorizontal: Spacing.medium,
    margin: Spacing.large,
    borderWidth: 3,
    borderRadius: Spacing.medium,
    elevation: 4,
    shadowColor: "#554135",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 5,
  },
  title: {
    backgroundColor: "black",
    marginTop: -Spacing.medium,
    marginBottom: Spacing.xsmall,
    color: Colors.blueLightAlpha,
    padding: Spacing.small,
    fontSize: FontSizes.medium,
    maxWidth: 240,
    minWidth: 200,
    fontWeight: "bold",
    textAlign: "center",
  },
  textWrapper: {
    marginTop: 8,
    flexDirection: "row",
    maxWidth: 260,
  },
  btnRowsStyle: {
    flexDirection: "row",
    backgroundColor: "#F7EBEB",
    borderBottomRightRadius: Spacing.large,
  },
  subTitle: {
    padding: Spacing.small,
    fontWeight: "bold",
    marginRight: Spacing.small,
    marginVertical: Spacing.xsmall,
    width: 120,
  },
  text: {
    padding: Spacing.small,
    borderWidth: 1,
    borderColor: "#E3CACA",
    marginVertical: Spacing.xsmall,
    textAlign: "left",
    fontStyle: "italic",
    color: Colors.blueDarker,
    backgroundColor: "#F7EBEB",
    width: 170,
  },
  btn: {
    marginTop: -Spacing.large,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: Colors.blueDarker,
    padding: Spacing.small,
    width: 50,
  },
  IconEditBtn: {
    width: 50,
    height: 50,
    padding: Spacing.small,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -Spacing.large,
    marginLeft: Spacing.xxxl,
    backgroundColor: "black",
    borderRadius: Spacing.large,
  },
});
