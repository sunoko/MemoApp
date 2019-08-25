import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDay}>2017/12/12</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoContentTitle}>講座のアイデアです</Text>
        </View>

        <CircleButton name="pencil" style={styles.editButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313c',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  memoHeaderDay: {
    fontSize: 12,
    color: 'white',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  memoContentTitle: {

  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
