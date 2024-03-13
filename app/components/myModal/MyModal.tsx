import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../theme/colors";
import { sizes } from "../../theme/sizes";
import Text from "../text/Text";

type props = {
  title: string;
  children: any;
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
};
const MyModal = (props: props) => {
  const { children, isOpen, setIsOpen, title } = props;

  const onHandleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      statusBarTranslucent
      transparent
      visible={isOpen}
      animationType="fade"
      onRequestClose={onHandleCloseModal}
    >
      <Pressable style={styles.background} onPress={onHandleCloseModal}>
        <Pressable style={[styles.container]}>
          <View style={styles.headercontainer}>
            <Text numOfLines={1} style={styles.headerTitle}>
              {title}
            </Text>
            <TouchableOpacity onPress={onHandleCloseModal}>
              <AntDesign name="close" size={sizes.iconSize[4]} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>{children}</View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: colors.shadow[1] },
  container: {
    backgroundColor: colors.white,
    padding: sizes.space[2],
    borderRadius: sizes.borderRadius[3],
    overflow: "hidden",
    margin: sizes.space[6] * 2,
    top: sizes.space[6] * 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  headercontainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: colors.gray[1],
    paddingBottom: sizes.space[1],
  },
  headerTitle: {
    flex: 1,
    alignSelf: "center",
    fontSize: sizes.fontSize[4],
  },
  bodyContainer: { marginTop: sizes.space[3] },
});
