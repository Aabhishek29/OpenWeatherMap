import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CardView from '../components/cardView';

const HomeScreen = ({ navigation }) => {
    const citiesInfo = useSelector((state) => state.citiesInfo)
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={citiesInfo}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => ( <CardView dispatch={dispatch} navigation={navigation} item={item}/> )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eae9f0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      width: '100%',
    }
});
  

export default HomeScreen;