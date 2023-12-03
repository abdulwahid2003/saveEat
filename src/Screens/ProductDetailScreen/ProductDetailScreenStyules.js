import {StyleSheet} from 'react-native'
import { CHANGE_BY_MOBILE_DPI, SCREEN_HEIGHT, getResponsiveFontSize } from '../../../global/constants'
import { Colors } from '../../../global'

export const styles=StyleSheet.create({
  descriptionCard:{
    marginHorizontal:20,
    alignSelf:"center",
    position:"absolute",
    bottom:SCREEN_HEIGHT/3
  },
  descriptionText:(size)=>({
    fontWeight:"bold",
    color:Colors.BLACK,
    fontSize:getResponsiveFontSize(size),
    lineHeight:size+2
  }),
  rationgView:{
    flexDirection:"row",
    height:CHANGE_BY_MOBILE_DPI(25),
    width:CHANGE_BY_MOBILE_DPI(60),
    backgroundColor:'#006400',
    alignItems:"center",
    paddingHorizontal:8,
    justifyContent:"center",
    borderRadius:7
  }
})