import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const PrimaryButton = ({title, onPress = () => {}}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style.btnContainer}>
          <Text style={style.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  const style = StyleSheet.create({
    title: {color: 'white', fontWeight: 'bold', fontSize: 18},
    btnContainer: {
      backgroundColor: 'black',
      height: 40,
      width: 200,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export {PrimaryButton};
  