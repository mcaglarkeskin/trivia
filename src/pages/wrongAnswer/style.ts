import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tryAgainButton: {
		width: 200,
		height: 50,
		backgroundColor: '#D9415D',
		borderRadius: 20,
		borderWidth: 5,
		borderColor: '#380140',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20
	},
	tryAgainText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '900'
	},
	score: {
		fontWeight: '900',
		fontSize: 30,
		marginVertical: 50
	}
})

export default style;