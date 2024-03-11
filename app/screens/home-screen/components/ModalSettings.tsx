import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyModal from "../../../components/myModal/MyModal";

type props = {
  ref: any;
};
const ModalSettings = (props: props) => {
  const { ref } = props;
  return (
    <MyModal>
      <Text>ModalSettings</Text>
    </MyModal>
  );
};

export default ModalSettings;

const styles = StyleSheet.create({});
