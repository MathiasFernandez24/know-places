import React from "react";
import { StyleSheet } from "react-native";
import MyModal from "../../../components/myModal/MyModal";
import { changeAppLanguage, i18nTranslate } from "../../../i18n";
import FlagItem from "./FlagItem";

import flagEnglish from "../../../assets/flags/flagEnglish.png";
import flagFrench from "../../../assets/flags/flagFrench.png";
import flagSpanish from "../../../assets/flags/flagSpanish.png";

type props = {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
};
const ModalSettings = (props: props) => {
  const { isOpen, setIsOpen } = props;

  const changueToEnglish = () => {
    changeAppLanguage("English");
    setIsOpen(false);
  };
  const changueToSpanish = () => {
    changeAppLanguage("Spanish");
    setIsOpen(false);
  };
  const changueToFrench = () => {
    changeAppLanguage("French");
    setIsOpen(false);
  };

  const listLanguages = [
    { language: "English", flag: flagEnglish, onPress: changueToEnglish },
    { language: "Spanish", flag: flagSpanish, onPress: changueToSpanish },
    { language: "French", flag: flagFrench, onPress: changueToFrench },
  ];

  return (
    <MyModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={i18nTranslate("modal-settings.selectLanguage")}
    >
      {listLanguages.map((item) => (
        <FlagItem
          flag={item.flag}
          onPress={item.onPress}
          name={item.language}
          key={item.language}
        />
      ))}
    </MyModal>
  );
};

export default ModalSettings;

const styles = StyleSheet.create({});
