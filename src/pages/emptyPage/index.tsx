import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import style from './style';

const EmptyPage = (): JSX.Element => {

	useEffect(() => {
		console.log('Component imported')
	}, [])

	return (
		<View style={style.container}>
			<Text>Empty Page</Text>
		</View>
	)
}

export default EmptyPage;