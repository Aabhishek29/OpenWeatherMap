import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import LikedCity from "../screens/LikedCitys";
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return(
			<Tab.Navigator>
        <Tab.Screen 
        name="Home"
				component={HomeScreen}
				options={() => ({
					title: "Home",
					headerTitleAlign: "center",
          tabBarIcon: ({size,color}) =>(<FontAwesome5 name="home" size={24} color="black" />)
         })} />
        <Tab.Screen name="LikedCity"
          component={LikedCity}
         options={() => ({
					title: "LikedCity",
					headerTitleAlign: "center",
          tabBarIcon: ({size,color}) =>(<AntDesign name="heart" size={24} color="black" />)
         })} />
      </Tab.Navigator>
  )
}

export default BottomTabNavigation;