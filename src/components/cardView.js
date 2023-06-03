import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import counterData from '../store/reduces';

const CardView = ( {dispatch, navigation ,item}) => {

    const getLocalResponse = () => {
        navigation.navigate("DetailScreen",{
            "item": item
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer} onTouchStart={getLocalResponse}>
                <View style={styles.rightContainer} >
                    <Text style={styles.cityName}>{item.name}</Text>
                    <View style={{marginBottom: 10}}>
                        <Text>Latitude: {item.lat}</Text>
                        <Text>Longitude: {item.lon}</Text>
                    </View>
                </View>
                <View style={styles.leftContainer}>
                    <Image style={{ height: 80, width: 80 }} source={require('../../assets/hazy.png')} />
                </View>
            </View>
            <View>
                { item.like ? <AntDesign onPress={()=> dispatch(counterData.actions.toggleLikeCities(item.id))} name="heart" size={24} color="red" />
                        : <AntDesign onPress={()=> dispatch(counterData.actions.toggleLikeCities(item.id))} name="hearto" size={24} color="black" /> }
            </View>
        </View>
    )
}

{/* <Text>Like: {item.like ? 'Yes' : 'No'}</Text> */}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      margin:10,
      borderRadius: 10,
      padding:15,
      shadowColor: '#171717',
      shadowOffset: {width: -20, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    rightContainer: {
        width: '50%',
        padding: 10,
        fontSize: 22,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default CardView;