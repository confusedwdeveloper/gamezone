import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Header from "../shared/header";

const AboutStack = createStackNavigator();

export default function CreateAppContainer() {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60
        },
        headerTintColor: "#444"
      }}
    >
      <AboutStack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header title="About GameZone" />
          // headerStyle: {
          //   backgroundColor: "#eee"
          // }
        }}
      />
    </AboutStack.Navigator>
  );
}
