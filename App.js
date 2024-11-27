import { StyleSheet, View, Image, Dimensions } from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';


export default function App() {
  
  async function saveData() {

await AsyncStorage.setItem(uuid, JSON.stringify(booking));
    Alert.alert("UUID=" + uuid);

    try {
      let thisBooking = await AsyncStorage.getItem(uuid);
      Alert.alert(thisBooking.title);
    }
    catch {
      Alert.alert("error getting data");
      
  }};

    <View style={styles.screencontainer}>
      <View style={styles.imgview}><Image source={require('./assets/moviesV3.png')}/></View>
      <Swiper showsButtons={true}>
          <PersonalInfo screenstyle={styles.screen}/>
          <MovieBooking screenstyle={styles.screen}/>
      </Swiper>
    </View>
}
var width = Dimensions.get('window');
const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: .5,
    marginTop: "8%"
  }, 
  screencontainer: {
    flexDirection:"column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"
  }

});
