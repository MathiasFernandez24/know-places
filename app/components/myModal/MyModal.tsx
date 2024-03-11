import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";

type props = {
  children: any;
};
const MyModal = (props: props) => {
  const { children } = props;
  return <View>{children}</View>;
};

export default MyModal;

const styles = StyleSheet.create({});
