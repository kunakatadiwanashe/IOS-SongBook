import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from "../screens/HomeScreen";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{tabBarIcon: ({color}) => <Icon name="home-filled" />}} />
        </Tab.Navigator>
    )
}

export default BottomNavigator