import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const RootDrawer = createDrawerNavigator();

export default function Drawer() {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator initialRouteName="Home">
        <RootDrawer.Screen name="Home" component={HomeStack} />
        <RootDrawer.Screen name="About" component={AboutStack} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}
