import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../theme/colors";
import { sizes } from "../../../theme/sizes";

const buttonSize = Dimensions.get("window").width / 3;

type props = {
  onPress: () => void;
};
const ButtonCamera = (props: props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="camerao" size={buttonSize * 0.7} />
    </TouchableOpacity>
  );
};

export default ButtonCamera;

const styles = StyleSheet.create({
  container: {
    width: buttonSize,
    height: buttonSize,
    backgroundColor: colors.white,
    borderRadius: buttonSize,
    position: "absolute",
    bottom: sizes.space[5],
    alignSelf: "center",
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
