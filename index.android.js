import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import Header from './src/components/Header';
import Row from './src/components/Row';
import demoData from './demoData';

export default class listViewExample extends Component {
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderHeader={() => <Header />}
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

AppRegistry.registerComponent('listViewExample', () => listViewExample);
