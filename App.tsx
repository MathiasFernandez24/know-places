import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { i18n } from "./app/i18n";
import Navigation from "./app/navigation/Navigation";
import { useStoreSettingsUser } from "./app/store/useStoreSettingsUser";
if (__DEV__) {
  import("./app/config/ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

export default function App() {
  const [updateLanguage, setUpdateLanguage] = useState(true);
  i18n.onChange(() => {
    setUpdateLanguage(!updateLanguage);
    // setLanguage();
  });

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/2");
    // .then((r) => r.json())
    // .then((res) => console.log(res));
  }, []);

  const { testNumber, moreTestNumber, lessTestNumber } = useStoreSettingsUser();
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
