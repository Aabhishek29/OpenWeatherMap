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
                <Text style={styles.header}>{item.name}</Text>
                <View style = {styles.mainContainer}>
                    <View>
                        <Text style={styles.textHeader}>weather Main : </Text>
                        <Text style={styles.textHeader}>weather Description : </Text>
                        <Text style={styles.textHeader}>Pressure : </Text>
                        <Text style={styles.textHeader}>Humidity : </Text>
                        <Text style={styles.textHeader}>Wind Speed : </Text>
                    </View>
                    <View>
                        <Text style={styles.textHeaderAns}>{localData.weather[0].main}</Text>
                        <Text style={styles.textHeaderAns}>{localData.weather[0].description}</Text>
                        <Text style={styles.textHeaderAns}>{localData.main.pressure}</Text>
                        <Text style={styles.textHeaderAns}>{localData.main.humidity}</Text>
                        <Text style={styles.textHeaderAns}>{localData.wind.speed}</Text>
                    </View>
                </View>
            </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        fontWeight: 'bold',
        margin: 15,
        fontSize:32 
    },
    textHeader: {
        fontWeight: 'bold',
        margin: 15 
    },
    textHeaderAns: {
        margin: 15
    }
})

export default DetailScreen;