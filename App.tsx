//react
import { StatusBar } from "react-native";

//theme
import { THEME } from "./src/theme/index";

//fonts
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

//native-base
import { Box, NativeBaseProvider } from "native-base";

//components
import { LoadingComponent } from "@components/LoadingComponent";

//screens
import { SignInScreen } from "@screens/SignInScreen";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      {fontsLoaded ? <SignInScreen></SignInScreen> : <LoadingComponent />}
    </NativeBaseProvider>
  );
}
