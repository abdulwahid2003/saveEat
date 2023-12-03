import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../../global";

export const styles = StyleSheet.create({
    container: {
        height: Constants.HEADER_HEIGHT,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-between'
    },

    headerLeftContainer: {
        flex: 1.1,
        // backgroundColor: Colors.PRIMARY
    },

    headerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0

    },

    headerCenterContainer: {
        flex: 6,
        // backgroundColor: Colors.WHITE
    },

    headerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerRightContainer: {
        flex: 1.1,
        // backgroundColor: Colors.WHITE
    },

    headerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
    },

    headerText: {
        fontSize: Fonts.SIZE_20,
        fontFamily: Fonts.BOLD,
        color: Colors.SECONDARY
    },
    alignsearch: {
        width: 30,
        height: 30,
        marginTop: 5,
        flexDirection: "row",
        // justifyContent: "flex-end",
        alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "red",
        // marginLeft: 5,
        // marginRight: 0


    },
});