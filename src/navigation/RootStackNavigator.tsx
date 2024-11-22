import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BookingScreen,
  CheckoutScreen,
  PackageSelectionScreen,
  SuccessfullyBookedScreen,
} from '../screens/index';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = (): React.JSX.Element => {
  return (
    <RootStack.Navigator
      initialRouteName="PackageSelection"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name="PackageSelection"
        component={PackageSelectionScreen}
      />
      <RootStack.Screen name="Booking" component={BookingScreen} />
      <RootStack.Screen name="Checkout" component={CheckoutScreen} />
      <RootStack.Screen
        name="SuccessfullyBooked"
        component={SuccessfullyBookedScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
