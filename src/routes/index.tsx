//native-base
import { useTheme, Box } from "native-base";

//react-navigation
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//routes
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const nativeBaseTheme = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = nativeBaseTheme.colors.gray[700];

  return (
    <Box flex={1} bg={"gray.700"}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
