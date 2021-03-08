import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';


import style from './style';

const Welcome = ({ navigation }) => {
	return (
		<ImageBackground source={require('../../shared/assets/background.jpg')} imageStyle={{ opacity: 0.6 }} style={style.container}>
			<View style={style.inner}>
				<Text style={style.welcomeText}>Welcome to Trivia Game!</Text>
			</View>
			<View style={[style.inner, { justifyContent: 'flex-start' }]}>
				<Pressable style={style.button} onPress={() => navigation.navigate('Trivia')}>
					<Text style={style.buttonText}>Start!</Text>
				</Pressable>
			</View>
		</ImageBackground>
	)
}

export default Welcome;