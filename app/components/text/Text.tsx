import { StyleSheet, Text as RNText, View } from "react-native";
import React from "react";

type props = {
  children: string;
};
const Text = (props: props) => {
  const { children } = props;
  return (
    <View>
      <RNText>{children}</RNText>
    </View>
  );
};

export default Text;

const styles = StyleSheet.create({});
