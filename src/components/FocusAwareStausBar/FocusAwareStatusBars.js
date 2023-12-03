import * as React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

    import { Colors } from '../../../global';

const FocusAwareStatusBar = ({ isLightBar, isTopSpace, isTransparent, isSpecial }) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const isAndroid = Platform.OS === 'android';

  return <>
    <StatusBar translucent={true} />
    {isFocused ? isAndroid ?
      <View style={{ paddingTop: isTopSpace ? insets.top : 0, backgroundColor: isTransparent ? 'transparent' : Colors.WHITE }}>
        <StatusBar
          backgroundColor={isSpecial ? "#e6e6ee" : isTransparent ? 'transparent' : Colors.WHITE}
          barStyle={isLightBar ? 'light-content' : 'dark-content'}
        />
      </View>
      :
      <View style={{ paddingTop: isTopSpace ? insets.top : 0, backgroundColor: isTransparent ? 'transparent' : Colors.WHITE }}>
        <StatusBar
          barStyle={isLightBar ? 'light-content' : 'dark-content'}
        />
      </View >
      :
      null
    }
  </>
};

export default FocusAwareStatusBar;