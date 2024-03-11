import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "../../components/listItem/ListItem";
import { i18nTranslate } from "../../i18n";

const Home = () => {
  return (
    <View>
      <ListItem
        title={i18nTranslate("home-screen.settings")}
        onPress={() => console.log("test boton")}
      />
      {/* <ModalSettings ref={modalizeRef} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
