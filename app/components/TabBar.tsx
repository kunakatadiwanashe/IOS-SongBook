import { View, Text, TouchableOpacity } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import Favorite from '../(tabs)/favorite';

export function TabBar({ state, descriptors, navigation }) {


// const icon = {
//     index: (props: any) => <Feather name='home' size={22} />,
//     Home: (props: any) => <Feather name='home' size={22} />,
//     Favorite: (props: any) => <Feather name='compass' size={22} />,
//     Profile: (props: any) => <Feather name='user' size={22} />
// }

return (
    <View style={{ flexDirection: 'row' }}>
    {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            
            <Text style={{ color: isFocused ? '#e32727' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

