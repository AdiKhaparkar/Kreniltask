import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from "../Aditya/src/Redux/store/store"
import HomeScreen from './src/HomeScreen/HomeScreen.js/HomeScreen';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </Provider>
  )
}


