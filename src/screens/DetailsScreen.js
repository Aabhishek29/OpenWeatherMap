import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';


const DetailScreen = ( {route} ) => {
    const isFocused = useIsFocused();
    const { item } = route.params;
    const [localData, setLocaldata] = useState(null);

    useEffect(() => {
        if (isFocused) {
          // Make your API call here
          console.log("Item API request for "+item.name);
          let url = `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&appid=e1f72c5f6f8cd361a605cda3ea7a0343`
          axios({
              method: 'get',
              url: url,
            }).then((response) => {
              console.log(response.data);
               setLocaldata(response.data);
            });
        }
      }, [isFocused]);

      if (localData === null) {
        return (
            <View style={styles.container}>
                <Image style={{ height: 25, width: 25 }} source={require("../../assets/loading.gif")} />
            </View>
        )
      }else{
        return(
            <View style={styles.container}>
                <Text>weather Main : {localData.weather[0].main}</Text>
                <Text>weather Description {localData.weather[0].description}</Text>
                <Text>Pressure {localData.main.pressure}</Text>
                <Text>Humidity {localData.main.humidity}</Text>
                <Text>Wind Speed {localData.wind.speed}</Text>
            </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DetailScreen;