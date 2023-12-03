import { View, Text, Image } from 'react-native'
import React from 'react'
import { useGetProductByProductIdQuery } from '../../redux/query'
import { CHANGE_BY_MOBILE_DPI, SCREEN_HEIGHT, SCREEN_WIDTH, getResponsiveFontSize } from '../../../global/constants'
import { Colors, Constants } from '../../../global'
import Carousel from 'react-native-snap-carousel';
import DiscountScvg from '../../../assets/svg/discount.svg'
import Rate from '../../../assets/svg/star2.svg'
import { styles } from './ProductDetailScreenStyules'
import FocusAwareStatusBar from '../../components/FocusAwareStausBar/FocusAwareStatusBars'
import { globalStyles } from '../../../global/globalStyles'
const ProoductDetailScreen = ({route:{params:{productId}}}) => {

    const {data}=useGetProductByProductIdQuery(productId)
    // console.log("data",data)
    const carouselRef=React.useRef(null)
   
  return (
    <View style={globalStyles.screenView}>
         <FocusAwareStatusBar isTopSpace={true} isTransparent={true}/>
        <Text style={{textAlign:"center",color:Colors.BLACK,fontSize:getResponsiveFontSize(21),lineHeight:23,fontWeight:"bold"}}>{data?.title}</Text>
     <Carousel


ref={carouselRef}
data={data?.images}
renderItem={({ item, index }) => {
    return (
        <Image source={{uri:item}} resizeMode="contain" style={{height:SCREEN_HEIGHT/2.6,width:SCREEN_WIDTH}}/>
    )
}}
activeSlideAlignment={'center'}
snapToAlignment={"center"}
sliderWidth={Constants.SCREEN_WIDTH}
itemWidth={CHANGE_BY_MOBILE_DPI(350)}
swipeThreshold={0}
layoutCardOffset={-30}
inactiveSlideOpacity={0.4}
containerCustomStyle={{
    overflow: 'visible',
    // marginVertical: 5,
    // marginTop: 10
}}
contentContainerCustomStyle={{
    // paddingHorizontal: (Constants.SCREEN_WIDTH - CHANGE_BY_MOBILE_DPI(350)) / 2, marginLeft: 10
}}

/>
<View style={styles.descriptionCard}>
<View style={{borderWidth:1,borderRadius:10,paddingHorizontal:15,paddingVertical:10}}>
    <View style={{flexDirection:"row",justifyContent:'space-between'}}>

<Text style={styles.descriptionText(17)}>{data?.brand}   |   ₹{data?.price}</Text>
<View style={styles.rationgView}>

<Rate style={{marginRight:10}}/>
<Text style={{...styles.descriptionText(14),fontWeight:"400",color:Colors.WHITE,
 }}>{data?.rating }</Text>

</View>
    </View>

<Text style={{...styles.descriptionText(14),fontWeight:"400",paddingTop:7 }}>{data?.description}</Text>
<View style={{flexDirection:"row",alignItems:'center'}}>
<DiscountScvg/>
<Text style={styles.descriptionText(19)}>  {Math.floor( data?.discountPercentage)}%</Text>


</View>

</View>
</View>

    </View>
  )
}

export default ProoductDetailScreen