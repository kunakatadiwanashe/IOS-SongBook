import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, Image } from "react-native";
import { PrimaryButton } from "../components/Button";

const OnboardScreen = ({navigation}: { navigation: any }) => {
  return (
    <SafeAreaView style={{flex: 1}}> 

      <View style={{ height: 350 }}>
        <Image style={{ width: 250, height: 250, resizeMode: 'contain', top: 50 }} 
        source={require("../../assets/images/icon.png")}
        />
      </View>
      <View>
        <Text>The Salvation Army </Text>
        <Text>Shona SongBook </Text>
        <PrimaryButton
            onPress={() => navigation.navigate('Home')} title="Get Started" 
          />
      </View>

    </SafeAreaView>
  );
};

export default OnboardScreen;



