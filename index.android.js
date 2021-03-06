/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} = React;

var MOCKED_MOVIES_DATA = [
	{
		title: 'Title',
		year: '2015',
		posters: {
			thumbnail: 'http://i.imgur.com/UePbdph.jpg'
		}
	}
];

var remote = React.createClass({
	var movie = MOCKED_MOVIES_DATA[0];

	render: function() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Shake or press menu button for dev menu
				</Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

AppRegistry.registerComponent('remote', () => remote);