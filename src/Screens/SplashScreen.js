import { View, Text, Animated } from 'react-native'
import React from 'react'
import { globalStyles } from '../../global/globalStyles'
import AppIcon from '../../assets/svg/ap.svg'
import { ScreenNames } from '../../global'
const SplashScreen = ({navigation}) => {

    const opacity=React.useRef(new Animated.Value(0)).current
    React.useEffect(()=>{
       Animated.timing(opacity,{
        toValue:1,
        useNativeDriver:false,
        friction:5,
        duration:3000
       }).start(({finished})=>{
        if (finished) {
            navigation.navigate(ScreenNames.PRODUCTS_SCREEN)
        }
       })
    })
    const opacityInterpolate=opacity.interpolate({
        inputRange:[0,1],
        outputRange:[0,1]
    })
 
  return (
    <View style={{...globalStyles.screenView,justifyContent:"center",alignItems:"center"}}>
        <Animated.View style={{opacity:opacityInterpolate}}>

      <AppIcon/>
        </Animated.View>
    </View>
  )
}

export default SplashScreen