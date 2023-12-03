import { View, Text, Image} from 'react-native'
import React from 'react'
import { styles } from './ProductCardStyles'
import TouchableResize from '../TouchableResize/TouchableResize'
import TouchableComponent from '../TouchableConponent/TouchableComponent'
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../global'
const ProductCard = ({imageUri,productName,productPrice,productId}) => {
    const navigation=useNavigation()
    const goToProductDetailScreen=()=>{navigation.navigate(ScreenNames.PRODUCT_DETAIL_SCREEN,{productId:productId})}
  return (
  
  <TouchableComponent
onPress={goToProductDetailScreen}
  >
    <View style={{marginHorizontal:4,marginVertical:7}}>
        <View style={
     styles.productCardView }>

      <Image source={{uri:imageUri}} style={styles.productImage} resizeMode="contain"/>

      <View style={{marginTop:10,alignItems:"center"}}>
<Text style={styles.prodcutText(16)} numberOfLines={2}>{productName}</Text>
     
     
    

     <View style={styles.priceView}>

        <Text style={[styles.prodcutText(17),{marginTop:5}]}>₹{productPrice}</Text>

<TouchableResize
 style={styles.touchableResize}
textStyle={styles.prodcutText(17)}
name={"Add"}/>
     </View>
      </View>
        </View>
    </View>
    </TouchableComponent>
  )
}

export default React.memo(ProductCard)