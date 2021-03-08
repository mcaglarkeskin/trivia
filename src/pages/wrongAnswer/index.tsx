import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';

import LottieView from 'lottie-react-native';

import style from './style';

const WrongAnswerPage = ({ navigation, route }): JSX.Element => {

	const { score } = route.params;

	useEffect(() => {
		console.log(score)
	}, [])

	return (
		<ImageBackground source={require('../../shared/assets/background.jpg')} style={style.container}>
			<LottieView style={{ width: 300, height: 300 }} source={require('../../shared/assets/wrong.json')} autoPlay loop />
			<Text style={style.score}>Your score is {score}</Text>
			<Pressable onPress={() => { navigation.navigate('Welcome') }} style={style.tryAgainButton}>
				<Text style={style.tryAgainText}>Try Again!</Text>
			</Pressable>
		</ImageBackground>
	)
}

export default WrongAnswerPage;