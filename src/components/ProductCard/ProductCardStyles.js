import {StyleSheet} from 'react-native'
import { CHANGE_BY_MOBILE_DPI, getResponsiveFontSize } from '../../../global/constants'
import { Colors } from '../../../global'

export const styles=StyleSheet.create({
    productCardView:{
        height:CHANGE_BY_MOBILE_DPI(200),
        width:CHANGE_BY_MOBILE_DPI(160),
        backgroundColor:Colors.WHITE,
        paddingHorizontal:20,
        borderWidth:0,
        borderRadius:15,
        elevation:11,
        marginBottom:10,
        alignItems:"center"
    },
    productImage:{
        height:"40%",
        width:"65%",
        borderRadius:60,
        marginTop:20
    },
    prodcutText:(size)=>({
        textAlign:"center",
        fontSize:getResponsiveFontSize(size),
        lineHeight:size+2,
        fontWeight:"500",
        color:Colors.BLACK
    }),
    priceView:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:CHANGE_BY_MOBILE_DPI(110),
        flex:1,
        marginTop:10
    },
    touchableResize:{
        height:CHANGE_BY_MOBILE_DPI(30),
        width:"60%",
        borderRadius:5,
        backgroundColor:"#8ADAB2",
        alignItems:"center",
        justifyContent:"center"
    }
})