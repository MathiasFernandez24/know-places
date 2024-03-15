import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Input from "../../components/input/Input";
import { useKeyboardVisible } from "../../hook/useKeyboardVisible";
import { i18nTranslate } from "../../i18n";
import { sizes } from "../../theme/sizes";
import ButtonCamera from "./components/ButtonCamera";
import ButtonSave from "./components/ButtonSave";
import ButtonSettings from "./components/ButtonSettings";
import ModalSettings from "./components/ModalSettings";

const cameraSize = Dimensions.get("window").width;
const Home = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isOpenModalSettings, setIsOpenModalSettings] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const openModalSettings = () => {
    setIsOpenModalSettings(true);
  };
  const isKeyboardActive = useKeyboardVisible();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
      console.log("NECESITO PERMISO PARA LA CAMARA");
      return;
    } else {
      console.log("EXITO");
    }
  }, []);

  const isSaveDisabled = !title.length;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {!isKeyboardActive && (
          <Camera style={styles.camera} ratio="1:1"></Camera>
        )}
        <Input
          placeholder={i18nTranslate("home-screen.namePlace")}
          value={title}
          setValue={setTitle}
          containerStyles={{ backgroundColor: "green", padding: 10 }}
        />
        <Input
          placeholder={i18nTranslate("home-screen.detailPlace")}
          value={detail}
          setValue={setDetail}
          containerStyles={{
            backgroundColor: "green",
            padding: 10,
            flex: 1,
          }}
        />
        <View style={styles.buttonsContainer}>
          {!isKeyboardActive && (
            <>
              <ButtonSettings onPress={openModalSettings} />
              <ButtonCamera
                onPress={() => {
                  console.log("TAKE A PICTURE");
                }}
              />
            </>
          )}
          <ButtonSave
            isDisabled={isSaveDisabled}
            onPress={() => {
              console.log("SAVE PLACE");
            }}
          />

          <ModalSettings
            isOpen={isOpenModalSettings}
            setIsOpen={setIsOpenModalSettings}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 300,
    flex: 1,
  },
  camera: { width: cameraSize, height: cameraSize },
  buttonsContainer: {
    flexDirection: "row",
    backgroundColor: "pink",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    paddingBottom: sizes.space[4],
    bottom: 0,
  },
});
