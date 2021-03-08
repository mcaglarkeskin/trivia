import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcomeText: {
		color: '#380140',
		fontSize: 30,
		fontWeight: 'bold',
	},
	button: {
		width: 300,
		height: 70,
		backgroundColor: '#D9415D',
		borderRadius: 20,
		borderWidth: 5,
		borderColor: '#380140',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '900'
	}
})

export default style;