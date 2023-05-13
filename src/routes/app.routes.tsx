import * as React from "react";

//react-navigation
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabScreenProps,
} from "@react-navigation/material-bottom-tabs";

//assets
import DashboardSVG from "@assets/home.svg";
import HistorySVG from "@assets/history.svg";
import ProfileSVG from "@assets/profile.svg";

//screens
import { DashboardScreen } from "@screens/DashboardScreen";
import { ExercisesScreen } from "@screens/ExercisesScreen";
import { HistoryScreen } from "@screens/HistoryScreen";
import { ProfileScreen } from "@screens/ProfileScreen";
import { Text, theme, useTheme } from "native-base";

type AppRoutesTypeProps = {
  DashboardScreen: undefined;
  HistoryScreen: undefined;
  ProfileScreen: undefined;
  ExercisesScreen: undefined;
};

export type AppNavigationRoutesProps =
  MaterialBottomTabScreenProps<AppRoutesTypeProps>;

export function AppRoutes() {
  const { sizes } = useTheme();
  const iconSize = sizes[6];

  const Tab = createMaterialBottomTabNavigator<AppRoutesTypeProps>();

  return (
    <Tab.Navigator labeled={false}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <DashboardSVG fill={color} height={iconSize} width={iconSize} />
          ),
        }}
        name="DashboardScreen"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySVG fill={color} height={iconSize} width={iconSize} />
          ),
        }}
        name="HistoryScreen"
        component={HistoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSVG fill={color} height={iconSize} width={iconSize} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      {/* <Tab.Screen name="ExercisesScreen" component={ExercisesScreen} /> */}
    </Tab.Navigator>
  );
}
