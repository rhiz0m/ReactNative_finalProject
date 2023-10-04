import {
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLayoutEffect } from "react";
import { useContext } from "react";

/* Components */

import { ProjectsContext } from "../Context_prj/ProjectsContext";
import { ProjectForm } from "../components/ProjectsForm";

/* Styling fom Styles-folder */

import { RootScreen } from "../Styles/RootScreen";
import { Colors } from "../Styles/Colors";
import { Spacing } from "../Styles/Spacing";

export const EditProjects = ({ route, navigation }) => {
  //Route prop is used to extract the id.

  const projectsCtx = useContext(ProjectsContext);

  //Checks if params is an undefined, if it undefined we add an Id.
  const editedProjectId = route.params?.projectId;

  //Converting to a boolean. True if editing , false otherwise.
  const isEditing = !!editedProjectId;

  //Ternary expression to set the title dynamicly.
  //To avoid flickering, wrap setOptions in useEffect or useLayouEffect.

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Update Project" : "Add Projects",
    });
  }, [navigation, isEditing]);

  //If the Id we are currently looking at is the same as the editedProjectId, that is the project we want to edit.
  const selectedProject = projectsCtx.projects.find(
    (project) => project.id === editedProjectId
  );

  const DeleteProjectHandler = () => {
    //Passing the Id to be deleted
    projectsCtx.deleteProject(editedProjectId);
    navigation.goBack();
  };
  const CancelProjectHandler = () => {
    navigation.goBack();
  };
  const ConfirmProjectHandler = (projectsData) => {
    if (isEditing) {
      projectsCtx.updateProject(editedProjectId, projectsData);
    } else {
      projectsCtx.addProject(projectsData);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <LinearGradient colors={[Colors.orangeLight, "transparent"]}>
        <ImageBackground
          source={require("../assets/backgrounds/bgPlanning4.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.3 }}
          style={RootScreen.bgImage}
        >
          <View>
            <ProjectForm
              submitButtonLabel={isEditing ? "Update Project" : "Add Project"}
              onCancel={CancelProjectHandler}
              onSubmit={ConfirmProjectHandler}
              defaultValues={selectedProject}
            />

            <View style={styles.deleteBtnContainer}>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={DeleteProjectHandler}
              >
                <MaterialCommunityIcons
                  name="delete-variant"
                  size={32}
                  color={Colors.orangeLighter}
                  onPress={DeleteProjectHandler}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../assets/pictures/Capy_.png")}
            />
          </View>
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
  deleteBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtn: {
    marginTop: Spacing.medium,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    backgroundColor: "black",
    borderRadius: Spacing.xxxl,
  },
  imgContainer: {
    alignItems: "center",
  },

  img: {
    marginTop: 80,
    justifyContent: "center",
    width: 250,
    height: 140,
  },
});
