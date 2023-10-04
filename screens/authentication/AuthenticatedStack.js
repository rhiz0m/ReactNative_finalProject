import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* Screens */

import { HomeScreen } from "../HomeScreen";
import { DueDate } from "../DueDate";
import { Priority } from "../Priority";
import { EditProjects } from "../EditProjects";

/* Styles */

import { Colors } from "../../Styles/Colors";
import { HeaderBtn } from "../../Styles/Btn/HeaderBtn";
import { RootScreen } from "../../Styles/RootScreen";
import { ProjectsContextProvider } from "../../Context_prj/ProjectsContext";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProjectsOverview = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.orangeLighter },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: Colors.orangeLighter,
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveBackgroundColor: Colors.blueMediumAlhpa,
        tabBarInactiveBackgroundColor: "black",
        tabBarLabelStyle: { fontSize: 12 },
        headerRight: () => (
          <HeaderBtn
            title="+"
            style={RootScreen.wrapper}
            onPress={() => {
              navigation.navigate("Edit Projects");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home Screen",
          tabBarLabel: "Home Screen",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="earth" size={24} color={"white"} />
          ),
        }}
      />
      <Tab.Screen
        name="Due Date"
        component={DueDate}
        options={{
          title: "Due Date",
          tabBarLabel: "Due Date",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="project" size={24} color={"white"} />
          ),
        }}
      />
      <Tab.Screen
        name="Priority"
        component={Priority}
        options={{
          title: "Priority",
          tabBarLabel: "Priority",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="priority-high"
              size={24}
              color={"white"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AuthHomeScreen = () => {
  return (
    <>
      <StatusBar style="auto" />
      <ProjectsContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.orangeLighter },
          }}
        >
          <Stack.Screen
            name="Project Overview"
            component={ProjectsOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Edit Projects" component={EditProjects} />
        </Stack.Navigator>
      </ProjectsContextProvider>
    </>
  );
};
