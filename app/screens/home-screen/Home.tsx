import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "../../components/listItem/ListItem";
import { i18nTranslate } from "../../i18n";
import ButtonCamera from "./components/ButtonCamera";
import ButtonSettings from "./components/ButtonSettings";
import ModalSettings from "./components/ModalSettings";
import ButtonSave from "./components/ButtonSave";

const Home = () => {
  const [isOpenModalSettings, setIsOpenModalSettings] = useState(false);
  const openModalSettings = () => {
    setIsOpenModalSettings(true);
  };
  return (
    <View style={styles.container}>
      <ListItem
        title={i18nTranslate("home-screen.settings")}
        onPress={openModalSettings}
      />
      <ButtonCamera />
      <ButtonSave isDisabled={true} />
      <ButtonSettings onPress={openModalSettings} />

      <ModalSettings
        isOpen={isOpenModalSettings}
        setIsOpen={setIsOpenModalSettings}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { backgroundColor: "red", flex: 1 },
});
