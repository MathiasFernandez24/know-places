import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../theme/colors";

const buttonSize = Dimensions.get("window").width / 6;
type props = {
  onPress: () => void;
};
const ButtonSettings = (props: props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="setting" size={buttonSize} />
    </TouchableOpacity>
  );
};

export default ButtonSettings;

const styles = StyleSheet.create({
  container: {
    width: buttonSize,
    height: buttonSize,
    backgroundColor: colors.white,
    borderRadius: buttonSize,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
