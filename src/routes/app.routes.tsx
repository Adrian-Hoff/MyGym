//react-native
import { Platform } from "react-native";

//react-navigation
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabScreenProps,
} from "@react-navigation/material-bottom-tabs";

//assets
import DashboardSVG from "@assets/home.svg";
import HistorySVG from "@assets/history.svg";
import ProfileSVG from "@assets/profile.svg";

//native-base
import { Box, useTheme } from "native-base";

//screens
import { DashboardScreen } from "@screens/DashboardScreen";
import { ExercisesScreen } from "@screens/ExercisesScreen";
import { HistoryScreen } from "@screens/HistoryScreen";
import { ProfileScreen } from "@screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type AppRoutesTypeProps = {
  DashboardScreen: undefined;
  HistoryScreen: undefined;
  ProfileScreen: undefined;
  ExercisesScreen: undefined;
};

export type AppNavigationRoutesProps =
  MaterialBottomTabScreenProps<AppRoutesTypeProps>;

export function AppRoutes() {
  const { sizes, colors } = useTheme();
  const iconSize = sizes[6];

  const Tab = createBottomTabNavigator<AppRoutesTypeProps>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 76,

          borderColor: colors.gray[600],

          backgroundColor: colors.gray[600],
        },
      }}
      // labeled={false}
      initialRouteName="DashboardScreen"
      // activeColor={colors.violet[600]}
      // inactiveColor={colors.gray[200]}
      // shifting={true}
      // barStyle={{

      // }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "History",
          tabBarTestID: "HistoryID",
          tabBarIcon: ({ color }) => (
            <HistorySVG fill={color} height={iconSize} width={iconSize} />
          ),
          tabBarAccessibilityLabel: "ok",
          tabBarActiveTintColor: colors.violet[500],
        }}
        name="HistoryScreen"
        component={HistoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarTestID: "HomeID",
          tabBarIcon: ({ color }) => (
            <DashboardSVG fill={color} height={iconSize} width={iconSize} />
          ),
          tabBarActiveTintColor: colors.violet[500],
        }}
        name="DashboardScreen"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarTestID: "ProfileID",
          tabBarIcon: ({ color }) => (
            <ProfileSVG fill={color} height={iconSize} width={iconSize} />
          ),
          tabBarActiveTintColor: colors.violet[500],
          // tabBarBadge: true,
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Tab.Screen
        name="ExercisesScreen"
        options={{
          tabBarButton: () => null,
        }}
        component={ExercisesScreen}
      />
    </Tab.Navigator>
  );
}
