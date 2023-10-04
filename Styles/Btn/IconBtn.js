import React from "react";
import { TouchableOpacity, StyleSheet, View} from "react-native";
import { Spacing } from "../Spacing";
import { Foundation } from "@expo/vector-icons"; 
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../Colors";
import { LinearGradient } from "expo-linear-gradient";

export const IconEditBtn = ({onPress}) => {
  return (
    <TouchableOpacity styles={styles.btn} onPress={onPress}>
      <MaterialCommunityIcons
        name="tooltip-edit"
        size={Spacing.xxl}
        color={"#F49F6F"}
      />
    </TouchableOpacity>
  );
};

const styles = () =>
  StyleSheet.create({
    btn: {
      justifyContent: "center",
      alignContent: "center",
      
    },
  });

  /* 
      <MaterialCommunityIcons
        name="space-invaders"
        size={Spacing.xxl}
        color={"#F49F6F"}
      />    <MaterialCommunityIcons
        name="space-invaders"
        size={Spacing.xxl}
        color={"#F49F6F"}
      />
  */
