import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	top: {
		backgroundColor: '#00000090',
		width: '100%',
		height: 150,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingTop: 35
	},
	topItem: {
		color: 'white',
	},
	questionContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		marginTop: 150
	},
	question: {
		width: '80%',
		marginBottom: 50
	},
	questionText: {
		color: 'black',
		fontSize: 20,
		fontWeight: '400'
	},
	readyButton: {
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
	readyText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '900'
	},
	correct: {
		color: 'green',
		fontWeight: '900',
		fontSize: 30,
		marginBottom: 50
	},
	desc: {
		fontSize: 17,
		fontWeight: '400',
		marginBottom: 20
	}
})

export default style;