//react
import { StatusBar } from "react-native";

//routes
import { Routes } from "@routes/index";

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
import { LoadingComponent } from "@components/LoadingComponent";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={THEME}>
        <LoadingComponent />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      <Routes />
    </NativeBaseProvider>
  );
}
