import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Colors } from "../Colors";
import { Spacing } from "../Spacing";
import { FontSizes } from "../FontSizes";

export const TitleBtn = ({ style, ...props }) => {
  return (
    <LinearGradient
      colors={["rgba(255, 225, 204, 0.2)", "transparent"]}
      style={styles().btn}
    >
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles().text}>{props.title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = () =>
  StyleSheet.create({
    btn: {
      marginVertical: Spacing.medium,
      paddingHorizontal: Spacing.medium,
      borderWidth: 2,
      borderColor: Colors.orangeLighter,
      color: "white",
      backgroundColor: "rgba(255, 225, 204, 0.3)",
   
    },
    text: {
      color: "white",
      margin: Spacing.small,
      fontSize: FontSizes.medium,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
