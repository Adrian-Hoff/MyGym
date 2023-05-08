//react
import { Text, View, StatusBar } from "react-native";

//fonts
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <View>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      {fontsLoaded ? (
        <>
          <Text>Hello, world!</Text>
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
