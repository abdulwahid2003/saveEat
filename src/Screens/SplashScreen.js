import { View,  Animated } from 'react-native'
import React from 'react'
import { globalStyles } from '../../global/globalStyles'
import AppIcon from '../../assets/svg/ap.svg'
import { ScreenNames } from '../../global'
import { CommonActions} from '@react-navigation/native';
const SplashScreen = ({navigation}) => {
const resetStack=CommonActions.reset({
    index:0,
    routes:[{name:ScreenNames.PRODUCTS_SCREEN}]
})
    const opacity=React.useRef(new Animated.Value(0)).current
    React.useEffect(()=>{
       Animated.timing(opacity,{
        toValue:1,
        useNativeDriver:false,
        friction:5,
        duration:3000
       }).start(({finished})=>{
        if (finished) {
            navigation.dispatch(resetStack)
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