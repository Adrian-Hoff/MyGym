//react-navigation
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

//screens
import { SignInScreen } from "@screens/SignInScreen";
import { SignUpScreen } from "@screens/SignUpScreen";

type AuthRoutes = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  const Stack = createNativeStackNavigator<AuthRoutes>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
