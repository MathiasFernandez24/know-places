import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../theme/colors";

const buttonSize = Dimensions.get("window").width / 6;

type props = {
  onPress: () => void;
  isDisabled: boolean;
};

const ButtonSave = (props: props) => {
  const { onPress, isDisabled } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isDisabled && { backgroundColor: colors.disabled },
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <AntDesign
        name="save"
        size={buttonSize * 0.9}
        color={isDisabled ? colors.gray[2] : undefined}
      />
    </TouchableOpacity>
  );
};

export default ButtonSave;

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
