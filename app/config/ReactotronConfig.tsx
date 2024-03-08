import AsyncStorage from "@react-native-async-storage/async-storage";
import Reactotron, {
  networking,
  openInEditor,
  trackGlobalErrors,
  asyncStorage,
  overlay,
} from "reactotron-react-native";
import { useStoreSettingsUser } from "../store/useStoreSettingsUser";
// import { useAsyncStorage } from "@react-native-async-storage/async-storage";

Reactotron.configure({
  name: "React Native Demo",
}) // controls connection & communication settings
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .useReactNative() // add all built-in react native plugins
  //   .use(networking())
  //   .use(openInEditor())
  //   .use(trackGlobalErrors())
  //   .use(overlay())
  //   .use(asyncStorage(useStoreSettingsUser))
  .connect(); // let's connect!
//   .stateValuesResponse({});
