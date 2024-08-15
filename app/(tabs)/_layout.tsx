import React from "react";
import { Tabs } from "expo-router";
import { TabBar } from "../components/TabBar";

const TabLayout = () =>{
    return (
        <Tabs tabBar={props => <TabBar {...props}/>}>
            <Tabs.Screen name="Home" options={{title: "Home",}} />
            <Tabs.Screen name="favorite" options={{title: "favorite"}} />
            <Tabs.Screen name="profile" options={{title: "profile"}} />
        </Tabs>
    )
}

export default TabLayout