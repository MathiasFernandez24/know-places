import React from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { sizes } from "../../theme/sizes";
type props = {
  value: string;
  setValue: (text: string) => void;
  placeholder?: string;
  containerStyles?: ViewStyle;
  inputStyles?: ViewStyle;
};
const Input = (props: props) => {
  const { value, setValue, placeholder, containerStyles, inputStyles } = props;
  return (
    <View style={containerStyles}>
      <TextInput
        style={[styles.input, inputStyles]}
        placeholder={placeholder ? placeholder : undefined}
        value={value}
        onChangeText={(text) => setValue(text)}
        multiline
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    justifyContent: "flex-end",
    backgroundColor: "pink",
    width: "100%",
    borderColor: "black",
    padding: sizes.space[2],
    textAlignVertical: "top",
  },
});
