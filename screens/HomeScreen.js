import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
import { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

/* Components */

import { TopBar } from "../components/TopBar";
import { ProjectsContext } from "../Context_prj/ProjectsContext";
import { ProjectOutput } from "../components/ProjectOutput";

/* Styling fom Styles-folder */

import { RootScreen } from "../Styles/RootScreen";
import { Colors } from "../Styles/Colors";

//Shows all projects in total.
export const HomeScreen = () => {
  //Uses and importing Context for Projects.

  const projectsCtx = useContext(ProjectsContext);

  return (
    <SafeAreaView>
      <LinearGradient colors={[Colors.orangeLight, "transparent"]}>
        <ImageBackground
          source={require("../assets/backgrounds/bgComputer.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.2 }}
          style={RootScreen.bgImage}
        >
          <View>
            <TopBar />
            <View>
              <ProjectOutput
                fallbackText={"You have no Projects yet!"}
                projects={projectsCtx.projects}
                sumBox={"▼ Projects ▼"}
              />
            </View>
            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
