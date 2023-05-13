//react-navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//screens
import { DashboardScreen } from "@screens/DashboardScreen";
import { ExercisesScreen } from "@screens/ExercisesScreen";
import { HistoryScreen } from "@screens/HistoryScreen";
import { ProfileScreen } from "@screens/ProfileScreen";

type AppRoutesTypeProps = {
  DashboardScreen: undefined;
  HistoryScreen: undefined;
  ProfileScreen: undefined;
  ExercisesScreen: undefined;
};

export function AppRoutes() {
  const Tab = createMaterialBottomTabNavigator<AppRoutesTypeProps>();

  return (
    <Tab.Navigator>
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />{" "}
      <Tab.Screen name="ExercisesScreen" component={ExercisesScreen} />
    </Tab.Navigator>
  );
}
