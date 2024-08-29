import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import TabBar from '../components/TabBar'
import { NavigationContainer } from "@react-navigation/native";
import fullSong from "./screen/fullSong";
import Home from "./index";

const _layout = () => {
  return (
    

  
    <Tabs screenOptions={{headerShown: false}} tabBar={props=> <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="favorite" options={{ title: "Favorites" }} />
      <Tabs.Screen name="prayer" options={{ title: "Prayer" }} />
    </Tabs>



  );
};

export default _layout;



