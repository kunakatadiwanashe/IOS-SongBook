import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabBar = ({ state, descriptors, navigation }) => {

  const icons = {
    index: (props)=> <AntDesign name="home" size={22} color={greyColor} {...props} />,
    favorite: (props)=> <AntDesign name="heart" size={22} color={greyColor} {...props} />,
    prayer: (props)=> <MaterialCommunityIcons name="hands-pray" size={22} color="black" />
  }

  const primaryColor = '#ff2a00f1';
  const greyColor = '#737373'; 
    
  return (
<View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            if(['_sitemap', '+not-found'].includes(route.name)) return null;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
              icons[route.name] ({
                color: isFocused? primaryColor: greyColor
              })
            }
            {/* <Text style={{ color: isFocused ? '#ff1302' : '#222' }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  )
}



const styles = StyleSheet.create({
  tabbar: {
      position: 'absolute', 
      bottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      marginHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 25,
      borderCurve: 'continuous',
      shadowColor: 'red',
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 0.1
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


export default TabBar