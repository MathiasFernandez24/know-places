import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../../../components/text/Text";
import { sizes } from "../../../theme/sizes";

type props = {
  flag: any;
  onPress: () => void;
  name: string;
};
const FlagItem = (props: props) => {
  const { flag, onPress, name } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={flag} />
      <Text numOfLines={1} style={styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default FlagItem;

const styles = StyleSheet.create({
  image: { height: 80, resizeMode: "contain" },
  container: {
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  text: { fontSize: sizes.fontSize[3], flex: 1 },
});
