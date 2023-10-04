import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { Spacing } from "./Spacing";
import { FontSizes } from "./FontSizes";

export const RootScreen = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  projectSumBox: {
    backgroundColor: "black",
    padding: Spacing.small,
    borderBottomRightRadius: Spacing.xxl,
    height: 65,
    width: 200,
    padding: Spacing.medium,
    marginBottom: Spacing.xl,
  },

  bgImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    margin: Spacing.small,
    fontSize: FontSizes.large,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.orangeLighter,
  },
  subTitle: {
    margin: Spacing.small,
    fontSize: FontSizes.medium,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  inputStyle: {
    width: "90%",
    padding: Spacing.small,
    border: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: Spacing.medium,
    backgroundColor: Colors.orangeLighter,
    marginVertical: Spacing.medium,
  },
  inputText: {
    color: "black",
  },
  paragraph: {
    margin: Spacing.medium,
    textAlign: "center",
    color: Colors.cyanLight,
    fontSize: FontSizes.medium,
  },
});
