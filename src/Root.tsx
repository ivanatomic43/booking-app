import React, {createRef} from 'react';
import RootStackNavigator from './navigation/RootStackNavigator';
import {
  NavigationContainer,
  type NavigationContainerRef,
} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import appStyles from './styles/app-styles';

const Root = (): React.JSX.Element => {
  const navigationRef = createRef<NavigationContainerRef<any>>();

  return (
    <GestureHandlerRootView style={[appStyles.fullSize]}>
      <NavigationContainer ref={navigationRef}>
        <RootStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default Root;
