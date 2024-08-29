import React from "react";
import {
SafeAreaView,
View,
Text,
StyleSheet,
Image,
TextInput,
ScrollView,
TouchableOpacity,
Dimensions,
FlatList,
TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import categories from "@/assets/consts/categories";
import songs from "@/assets/consts/songs";
import fullSong from "./screen/fullSong";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



const { width } = Dimensions.get("window");
const cardWidth = width / 1 - 20;

const Home = () => {
  
  const navigation = useNavigation();

const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

const ListCategory = () => {
return (
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.categoriesListContainer}>
  {categories.map((category, index) => (
  <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=> setSelectedCategoryIndex(index)}
    >
    <View style={{
                backgroundColor:
                  selectedCategoryIndex === index ? "red" : "white",
                ...style.categoryBtn,
              }}>
      <View style={style.categoryBtnImgCon}>
        <Image source={category.image} style={{ height: 20, width: 20, resizeMode: "cover" }} />
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 2 }}>
        {category.name}
      </Text>
    </View>
  </TouchableOpacity>
  ))}
</ScrollView>
);
};

const Card = ({songs}) => {
return (
<TouchableHighlight underlayColor={"white"} activeOpacity={0.9} onPress={()=> navigation.navigate("fullSong", songs)}
  >
  <View style={style.card}>
    <Text style={{
              fontSize: 20,
              fontWeight: "bold",
              backgroundColor: "#660a0a",
              width: 25,
              textAlign: "center",
              marginLeft: 10,
              paddingTop: 13,
              color: "white",
            }}>
      {songs.id}
    </Text>
    <View style={{ alignItems: "flex-start", paddingLeft: 55, marginTop: -25 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
        {songs.name}
      </Text>
      <Text style={{ fontSize: 14 }}>{songs.nameEng}</Text>
      <Text style={{ fontSize: 10, color: "#ff0000" }}>{songs.writer}</Text>
    </View>
  </View>
</TouchableHighlight>
);
};

return (

  <SafeAreaView style={{ flex: 1 }}>


    <View style={{ marginTop: 40, flexDirection: "row", paddingHorizontal: 20 }}>
      <View style={style.inputContainer}>
        <Icon name="search" size={25} style={{ marginRight: 10 }} />
        <TextInput style={{ flex: 1, fontSize: 16 }} placeholder="Search for a Song" />
      </View>
      <View style={style.sortBtn}>
        <Icon name="tune" size={25} />
      </View>
    </View>

    <View>
      <ListCategory />
    </View>

    <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={songs} renderItem={({ item })=>
      <Card songs={item} />}
      />
  </SafeAreaView>


);
};

export default Home;









const style = StyleSheet.create({
header: {
marginTop: 20,
flexDirection: "row",
justifyContent: "space-between",
paddingHorizontal: 20,
},
inputContainer: {
flex: 1,
height: 50,
borderRadius: 10,
flexDirection: "row",
backgroundColor: "#56545424",
alignItems: "center",
paddingHorizontal: 20,
},
sortBtn: {
width: 50,
height: 50,
marginLeft: 10,
backgroundColor: "#f01010cf",
borderRadius: 10,
justifyContent: "center",
alignItems: "center",
},
categoriesListContainer: {
paddingVertical: 30,
alignItems: "center",
paddingHorizontal: 20,
},
categoryBtn: {
height: 45,
width: 120,
marginRight: 7,
borderRadius: 30,
alignItems: "center",
paddingHorizontal: 5,
flexDirection: "row",
},
categoryBtnImgCon: {
height: 35,
width: 35,
backgroundColor: "white",
borderRadius: 30,
justifyContent: "center",
alignItems: "center",
},
card: {
height: 82,
width: cardWidth,
marginHorizontal: 10,
marginBottom: 20,
marginTop: 8,
borderRadius: 5,
elevation: 13,
backgroundColor: "white",
shadowColor: "#000",
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.8,
shadowRadius: 2,
},
});

function withNavigation(Home: ({ navigation }: { navigation: any; }) => React.JSX.Element) {
  throw new Error("Function not implemented.");
}
