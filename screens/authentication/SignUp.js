import { useContext, useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native";
import { ImageBackground } from "react-native";

/* Components */
import { CreateUser } from "../authentication/Auth";
import { AuthContext } from "../../Store/Auth-Context";
import { AuthContent } from "../authentication/AuthContent";
import { LoadingOverlay } from "../../components/LoadingOverlay";

/* Styling fom Styles-folder */

import { RootScreen } from "../../Styles/RootScreen";

export const SignUp = () => {
  //Loading state
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  //Forward email and password to createNewUser
  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await CreateUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Could not Sign Up, please check your credentials!");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user!" />;
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/backgrounds/bgMinimalism.jpeg")}
        resizeMode="cover"
        imageStyle={{ opacity: 1 }}
        style={RootScreen.bgImage}
      >
        <AuthContent onAuthenticate={signUpHandler} />
      </ImageBackground>
    </SafeAreaView>
  );
};

/*
      <ImageBackground
        source={require("../../assets/backgrounds/office.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.9 }}
        style={RootScreen.bgImage}
      >
        <LinearGradient
          colors={[Colors.orangelightAlpha, "transparent"]}
          style={RootScreen.bgImage}
        >
              </LinearGradient>
      </ImageBackground>
      <StatusBar style="auto" />

*/
