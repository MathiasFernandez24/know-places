import React from "react";
import { Text as RNText, StyleSheet, TextStyle, ViewStyle } from "react-native";

type props = {
  children: string;
  style?: ViewStyle | TextStyle;
  numOfLines?: number;
};
const Text = (props: props) => {
  const { children, style, numOfLines = undefined } = props;
  return (
    <RNText numberOfLines={numOfLines} style={style}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({});
