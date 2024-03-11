import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Text from "../text/Text";

type props = {
  title: string;
  onPress: () => void;
};
const ListItem = (props: props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>test</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: { backgroundColor: "pink", margin: 6 },
});
