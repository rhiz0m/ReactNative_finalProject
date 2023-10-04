import { View, Text, StyleSheet } from "react-native";

/* Components */

import { ProjectsList } from "../components/ProjectsList";
import { ProjectSummary } from "../components/ProjectSummary";

/* Styling fom Styles-folder */

import { FontSizes } from "../Styles/FontSizes";
import { Spacing } from "../Styles/Spacing";
import { Colors } from "../Styles/Colors";

export const ProjectOutput = ({ projects, sumBox, fallbackText }) => {
  //-- Output the projects TOTAL, the DATEs and a PROJECTS-list.

  let message = (
    <View style={styles.container}>
      <Text style={styles.message}>{fallbackText}</Text>
    </View>
  );

  if (projects.length > 0) {
    message = <ProjectsList projects={projects} />;
  }

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <ProjectSummary projects={projects} sumBox={sumBox} />
      </View>
      <View>{message}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    marginHorizontal: Spacing.medium,
    borderBottomRightRadius: Spacing.small,
    borderTopLeftRadius: Spacing.small,
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: "2",
  },
  message: {
    textAlign: "center",
    fontSize: FontSizes.medium,
    fontWeight: "bold",
    padding: Spacing.small,
    color: Colors.blueLightAlpha,
  },
});
