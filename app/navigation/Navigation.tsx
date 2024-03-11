import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home-screen/Home";
import Places from "../screens/places-screen/Places";

const Navigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} options={{ title: "test" }} />
      <Tab.Screen name="places" component={Places} />
    </Tab.Navigator>
  );
};

export default Navigation;
