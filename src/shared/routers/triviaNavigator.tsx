import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import QuestionPage from '../../pages/question';
import WrongAnswerPage from '../../pages/wrongAnswer';
import DifficultySelection from '../../pages/difficultySelection';

const Stack = createStackNavigator();

const TriviaNavigator = (): JSX.Element => {
	return (
		<Stack.Navigator initialRouteName={'Difficulty'} headerMode={'none'}>
			<Stack.Screen name="Question" component={QuestionPage} />
			<Stack.Screen name="WrongAnswer" component={WrongAnswerPage} />
			<Stack.Screen name="Difficulty" component={DifficultySelection} />
		</Stack.Navigator>
	)
}

export default TriviaNavigator;