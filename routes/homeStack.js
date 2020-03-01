import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, StackActions } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const HomeStack = createStackNavigator();

export default function CreateAppContainer() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60
        },
        headerTintColor: "#444"
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header title="GameZone" />

          // headerStyle: {
          //   backgroundColor: "#eee"
          // }
        }}
      />
      <HomeStack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details"
          // headerStyle: {
          //   backgroundColor: "#eee"
          // }
        }}
      />
    </HomeStack.Navigator>
  );
}
