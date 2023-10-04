import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Spacing } from "../Spacing";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const DeleteBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name="delete-variant"
        size={Spacing.xxl}
        color="black"
      />
    </TouchableOpacity>
  );
};

const styles = () => StyleSheet.create({});
