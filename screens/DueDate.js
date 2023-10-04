import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
import { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

/* Components */

import { TopBar } from "../components/TopBar";
import { ProjectsContext } from "../Context_prj/ProjectsContext";
import { ProjectOutput } from "../components/ProjectOutput";
import { TwoWeeksAgo } from "../utils/DateFormatted";

/* Styling fom Styles-folder */

import { Colors } from "../Styles/Colors";
import { Spacing } from "../Styles/Spacing";
import { RootScreen } from "../Styles/RootScreen";

//Shows projects by date 14 days back
export const DueDate = () => {
  const projectsCtx = useContext(ProjectsContext);

  const projectsDate = projectsCtx.projects.filter((project) => {
    const today = new Date();
    const twoWeeksAgo = TwoWeeksAgo(today, 14);
    return project.date > twoWeeksAgo;
  });

  return (
    <SafeAreaView>
      <LinearGradient colors={[Colors.orangeLight, "transparent"]}>
        <ImageBackground
          source={require("../assets/backgrounds/bgPlanning3.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.2 }}
          style={RootScreen.bgImage}
        >
          <View style={RootScreen.listOutputContainer}>
            <TopBar />
            <ProjectOutput projects={projectsDate} sumBox={"▼ Date ▼"} />
          </View>
          <StatusBar style="auto" />
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
  projectBox: {
    marginVertical: Spacing.large,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.xxl,
    borderWidth: 2,
    borderColor: Colors.orangeLighter,
    color: "white",
    backgroundColor: "rgba(255, 225, 204, 0.3)",
  },
});
