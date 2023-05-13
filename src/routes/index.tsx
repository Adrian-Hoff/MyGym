//react-navigation
import { NavigationContainer } from "@react-navigation/native";

//routes
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
