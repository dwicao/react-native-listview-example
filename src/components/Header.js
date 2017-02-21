import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
} from 'react-native';

const Header = props => {
	return (
		<View style={styles.container}>
			<TextInput 
				style={styles.input}
				placeholder="Search..."
				onChangeText={(text) => console.log('searching for', text)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		alignItems: 'center',
		backgroundColor: '#C1C1C1',
	},
	input: {
		flex: 1,
		height: 30,
		paddingHorizontal: 8,
		fontSize: 15,
		backgroundColor: '#FFFFFF',
		borderRadius: 2,
	},
});

export default Header;