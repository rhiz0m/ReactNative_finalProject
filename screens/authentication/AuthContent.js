import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { AuthForm } from "../authentication/AuthForm";
import { AuthBtn } from "../../Styles/Btn/AuthBtn";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../Styles/Colors";
import { Spacing } from "../../Styles/Spacing";  

export const AuthContent = ({ isLogin, onAuthenticate }) => {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.replace("SignUp");
    } else {
      navigation.replace("Login");
    }
  };

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    //The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.btn}>
        <AuthBtn onPress={switchAuthModeHandler} >
          {isLogin ? "Sign Up" : "Go to Login"}
        </AuthBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContent: {
    marginTop: 140,
    marginHorizontal: Spacing.xxl,
    
    borderRadius: Spacing.medium,
    backgroundColor: "rgba(255, 225, 204, 0.3)",
    shadowColor: "black",
    borderWidth: 1,
    borderColor: Colors.pinkOrangeGray,
  },
  btn: {
    marginTop: Spacing.large,
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: Spacing.medium,
    alignItems: "center",
  },
  buttons: {
    marginTop: Spacing.medium,
  },
});
