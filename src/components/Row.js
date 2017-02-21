import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

const Row = props => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: props.picture.large }} style={styles.photo} />
			<Text style={styles.text}>
				{ `${props.name.first} ${props.name.last}` }
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		marginLeft: 12,
		fontSize: 16,
	},
	photo: {
		height: 40,
		width: 40,
		borderRadius: 20,
	},
});

export default Row;