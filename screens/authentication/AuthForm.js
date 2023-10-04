import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AuthBtn } from "../../Styles/Btn/AuthBtn";
import { AuthInput } from "../authentication/AuthInput";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../Styles/Colors";
import { Spacing } from "../../Styles/Spacing";

export const AuthForm = ({ isLogin, onSubmit, credentialsInvalid }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <AuthInput
          label="Email"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <AuthInput
            label="Confirm Email"
            onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        <AuthInput
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <AuthInput
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.btnContainer}>
          <LinearGradient
            colors={[Colors.blueMedium, Colors.blueDark]}
            style={styles.btn}
          >
            <AuthBtn onPress={submitHandler}>
              {isLogin ? "Login" : "Sign Up"}
            </AuthBtn>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
  }, 
  btn: {
    marginTop: Spacing.small,
    width: 180,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: Spacing.large,
    alignItems: "center",
    justifyContent: "center"
  }
});
