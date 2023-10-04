import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors } from "../Colors";
import { Spacing } from "../Spacing";

export const PrimaryBtn = ({ size = 160, ...props }) => {
  return (
    <LinearGradient
      colors={[Colors.blueMedium, Colors.blueDark]}
      style={styles(size).btn}
    >
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles(size).text}>{props.title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = (size) =>
  StyleSheet.create({
    btn: {
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size / 4,
      borderRadius: Spacing.large,
      borderWidth: 2,
      borderColor: "black",
      marginVertical: Spacing.small,
    },
    text: {
      color: Colors.blueDarker,
      fontWeight: "bold",
      fontSize: size / 10,
    },
  });
