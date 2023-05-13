//react-navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import { SignInScreen } from "@screens/SignInScreen";
import { SignUpScreen } from "@screens/SignUpScreen";

export function AuthRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
