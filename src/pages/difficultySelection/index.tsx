import React, { useEffect } from 'react';
import { ImageBackground, Pressable, Text } from 'react-native';
import style from './style';

const DifficultySelection = ({ navigation }): JSX.Element => {

	useEffect(() => {
		console.log('Component imported')
	}, [])

	return (
		<ImageBackground source={require('../../shared/assets/background.jpg')} style={style.container}>
			<Text style={{ color: '#F28F38', marginBottom: 50, fontSize: 27, fontWeight: '900' }}>Please select a difficulty!</Text>
			<Pressable style={style.difficulty} onPress={() => navigation.navigate('Question', { difficulty: 'easy' })}>
				<Text style={style.difficultyText}>Easy</Text>
			</Pressable>
			<Pressable style={style.difficulty} onPress={() => navigation.navigate('Question', { difficulty: 'medium' })}>
				<Text style={style.difficultyText}>Medium</Text>
			</Pressable>
			<Pressable style={style.difficulty} onPress={() => navigation.navigate('Question', { difficulty: 'hard' })}>
				<Text style={style.difficultyText}>Hard</Text>
			</Pressable>
		</ImageBackground>
	)
}

export default DifficultySelection;