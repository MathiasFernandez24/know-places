import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { changeAppLanguage, i18n, i18nTranslate } from "./app/i18n";

export default function App() {
  const [updateLanguage, setUpdateLanguage] = useState(true);
  i18n.onChange(() => {
    setUpdateLanguage(!updateLanguage);
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{i18nTranslate("test.hello")}</Text>
      <Button title="ESPAÑOL" onPress={() => changeAppLanguage("Spanish")} />
      <Button title="FRANCES" onPress={() => changeAppLanguage("French")} />
      <Button title="INGLES" onPress={() => changeAppLanguage("English")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
