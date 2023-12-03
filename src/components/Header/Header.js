import React from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import White_Search_Icon from '../../assets/svg/White_Search_Icon.svg';
//my imports
import { styles } from './styles'

import BackIcon from '../../../assets/svg/Back_Icon.svg';


import { Colors,Constants, ScreenNames } from '../../../global';
const Header = ({
	name,
	activateLeftIcon,
	activateRightIcon,
	backgroundColor,
	// leftIconColor,
	// rightIconColor,
	textColor,special
}) => {
	// const navigation = useNavigation();
	return (
		<View style={styles.container}>

			{/* header left */}
			<View style={styles.headerLeftContainer}>

				{
					activateLeftIcon
						?
						// <TouchableOpacity
						//     style={styles.headerLeft}
						//     onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }}
						// >
						//     <MenuIcon />
						// </TouchableOpacity>
						null
						:
						<TouchableOpacity
							style={styles.headerLeft}
							// onPress={() => { special ==undefined?navigation.goBack():special() }}
						>
							<BackIcon />

						</TouchableOpacity>

				}

			</View>

			{/* header center */}
			<View style={styles.headerCenterContainer}>

				<View style={styles.headerCenter}>
					<Text style={styles.headerText}>
						{name}
					</Text>
				</View>

			</View>

			{/* header right */}
			<View style={styles.headerRightContainer}>

				<TouchableOpacity
					onPress={() => { }}
					activeOpacity={Constants.BUTTON_OPACITY}
					style={styles.headerRight}>

					{
						activateRightIcon ?
							<View style={styles.container1}>
								<TouchableOpacity style={styles.alignsearch} onPress={() => navigation.navigate(ScreenNames.RESTAURANT_SEARCH)} >
									{/* <White_Search_Icon /> */}
								</TouchableOpacity>
							</View>
							:
							null
					}

				</TouchableOpacity>


			</View>


		</View >
	);
}

export default Header;
