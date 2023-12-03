/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
 ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  Vibration,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { setUserName } from './src/redux/slice';
import { useGetAllProductsQuery } from './src/redux/query';
import ProductCard from './src/components/ProductCard/ProductCard';
import { CHANGE_BY_MOBILE_DPI, getResponsiveFontSize } from './global/constants';
import { Colors, ScreenNames } from './global';
import TouchableResize from './src/components/TouchableResize/TouchableResize';
import Header from './src/components/Header/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './src/Screens/ProductsScreen/ProductsScreen';
import ProoductDetailScreen from './src/Screens/ProductDetailScreen/ProoductDetailScreen';
import SplashScreen from './src/Screens/SplashScreen';
const App=() =>{
const Stack=createNativeStackNavigator()
  return (
    
    <NavigationContainer >
<Stack.Navigator screenOptions={{
  headerShown:false
}} initialRouteName={ScreenNames.SPLASH_SCREEN}>

      <Stack.Screen name={ScreenNames.SPLASH_SCREEN} component={SplashScreen}/>
      <Stack.Screen name={ScreenNames.PRODUCTS_SCREEN} component={ProductsScreen}/>
      <Stack.Screen name={ScreenNames.PRODUCT_DETAIL_SCREEN} component={ProoductDetailScreen}/>
</Stack.Navigator>
    
    </NavigationContainer>
    
  );
}
const mapStateToProps=(state)=>({
  userName:state?.user?.userName
})
const mapDispatchToProps=(dispatch)=>({
  dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)( App);
