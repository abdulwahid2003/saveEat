import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI, SCREEN_WIDTH } from "../../../global/constants";
import { Colors } from "../../../global";

export const styles=StyleSheet.create({
    searchCON:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SCREEN_WIDTH-30,
        borderWidth:1,
        borderRadius:10
    },
    textInput:{
        height:"100%",
        width:"90%",
    },
    touchableResize:{
        height:CHANGE_BY_MOBILE_DPI(39)
        ,width:CHANGE_BY_MOBILE_DPI(120),
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.ASH_GREY
    }
})