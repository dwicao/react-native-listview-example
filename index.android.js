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
import Footer from './src/components/Footer';
import demoData from './demoData';

export default class listViewExample extends Component {
  constructor() {
    super();
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const dataBlob = this.formatData(demoData);
    
    this.state = {
      dataSource: ds.cloneWithRows(dataBlob),
    };
  }

  formatData(data) {
    let dataBlob = {};

    data.map((person, index) => {
      dataBlob[index] = person;
    });

    return dataBlob;
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderHeader={() => <Header />}
        renderRow={(data) => <Row {...data} />}
        renderFooter={() => <Footer />}
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
