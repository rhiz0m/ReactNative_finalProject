import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { Colors } from "../Colors";
import { Spacing } from "../Spacing";

export const HeaderBtn = ({ size = 124, ...props }) => {
  return (
    <LinearGradient
      colors={[Colors.orangeLight, Colors.orangeMedium]}
      style={styles(size).container}
    >
      <TouchableOpacity onPress={props.onPress} style={styles(size).btn}>
        <Text style={styles.text}>Add PRJ</Text>
        <Image
          style={styles(size).btnImage}
          source={require("../../assets/icons/add.png")}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = (size) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size / 4,
      borderRadius: size / 2,
      borderColor: "Black",
      borderWidth: 2,
      marginVertical: Spacing.small,
      marginHorizontal: Spacing.medium,
    },
    btn: {
      flexDirection: "row",
      alignItems: "center",
    },
    btnImage: {
      width: size / 5,
      height: size / 5,
      marginLeft: 8
    },
    text: {
      fontSize: Spacing.medium
    },
  });
