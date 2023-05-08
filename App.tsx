//react
import { Text, View, StatusBar } from "react-native";

//fonts
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { Box, NativeBaseProvider } from "native-base";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      {fontsLoaded ? (
        <>
          <Box>Hello, world!</Box>
        </>
      ) : (
        <></>
      )}
    </NativeBaseProvider>
  );
}
