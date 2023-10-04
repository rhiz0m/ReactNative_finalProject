import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";

/* Components authentication */

import { AuthContextProvider, AuthContext } from "./Store/Auth-Context";

/* Screens */

import { Login } from "./screens/authentication/Login";
import { SignUp } from "./screens/authentication/SignUp";
import { AuthHomeScreen } from "./screens/authentication/AuthenticatedStack";

const Stack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const AuthenticatedScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthenticatedStack"
        component={AuthHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

//Returning Navigation for authenticated or not. Uses useContext Hook.
const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthScreens />}
      {authCtx.isAuthenticated && <AuthenticatedScreen />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
