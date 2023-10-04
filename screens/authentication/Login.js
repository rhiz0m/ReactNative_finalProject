import { Alert, StatusBar, View, Text, Image } from "react-native";
import { useContext } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

/* Components */

import { AuthContent } from "./AuthContent";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { login } from "./Auth";
import { AuthContext } from "../../Store/Auth-Context";

/* Styling fom Styles-folder */

import { RootScreen } from "../../Styles/RootScreen";
import { Spacing } from "../../Styles/Spacing";
import { Colors } from "../../Styles/Colors";

export const Login = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Could not log you in, check your credentials!");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in!" />;
  }

  return (
    <SafeAreaView style={styles.container}>
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
          <AuthContent isLogin onAuthenticate={loginHandler} />
          <View style={styles.titleBox}>
            <Text style={styles.title}>{`♦CapyPlanner♦`}</Text>

            <Text style={{ ...styles.text, marginTop: Spacing.small }}>
              Created by: Andreas Antonsson. STI, 2023
            </Text>
          </View>
          <View>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/reactNative.png")}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../../assets/pictures/Capy_.png")}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginVertical: Spacing.xsmall,
    fontSize: 18,
    textAlign: "center",
    color: Colors.orangeLighter,
    letterSpacing: Spacing.medium,
    marginLeft: Spacing.small,
    fontWeight: "bold",
  },
  iconImage: {
    marginTop: "11%",
    marginLeft: 30,
    width: 50,
    height: 50,
  },
  titleBox: {
    marginVertical: Spacing.medium,
    marginHorizontal: Spacing.small,
    marginBottom: Spacing.small,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    justifyContent: "center",
    width: "85%",
    height: "50%",
  },
});
