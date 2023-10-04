import { Text, View, StyleSheet } from "react-native";

/* Styling fom Styles-folder */

import { Colors } from "../Styles/Colors";
import { FontSizes } from "../Styles/FontSizes";
import { RootScreen } from "../Styles/RootScreen";

export const ProjectSummary = ({ projects, sumBox }) => {
  //Reduce() combines values of an array and add them together.
  //toFixed() outputs a number with x decimal places.

  const projectsTotal = projects.reduce((sum, project) => {
    return sum + project.amount;
  }, 0);

  //Props for projects in total and infoBox and
  return (
    <View style={RootScreen.projectSumBox}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{sumBox}</Text>
        <View>
          <Text style={styles.projectSum}>{projectsTotal.toFixed(0)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.orangeLighter,
    justifyContent: "center",
  },
  projectSum: {
    color: "white",
    fontSize: FontSizes.large,
    justifyContent: "center",
  },
});
