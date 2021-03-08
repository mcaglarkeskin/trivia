import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../../pages/welcome';
import TriviaNavigator from './triviaNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const RootNavigator = (): JSX.Element => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Welcome'} headerMode={'none'}>
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Trivia" component={TriviaNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RootNavigator;