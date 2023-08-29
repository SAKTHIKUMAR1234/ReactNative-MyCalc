import { Alert, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import list from './ButtonList'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const gap = 12;
const itemPerRow = 5;
const totalGapSize = (itemPerRow - 1) * gap;
const { width } = Dimensions.get('window');
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;



function App(): JSX.Element {

  const [value, Value] = useState('');

  const UpdateValue = (item: string) => {
    try {
      if (item == 'Clear') {
        Value('')
      }
      else if (item == '=') {
        Value(eval(value));
      }
      else if (item == 'DEL') {
        Value(value.substring(0, value.length - 1));
      }
      else {
        Value(value + item);
      }
    } catch (e) {
      Alert.alert('Error');
    }
  }


  return (
    <SafeAreaView style={styles.main}>

      <View>
        <View ><Text style={{ color: 'white', marginTop: '5%', fontSize: 20, marginLeft: '10%' }}>Casio</Text></View>
        <View style={styles.display}><TextInput style={{
          fontSize: 20,
          minWidth: '80%',
          minHeight: '30%',
          alignSelf: 'center',
          color: 'black',
          fontWeight: '800'
        }} keyboardType='numeric' onChangeText={(text) => Value(text)}>{value}</TextInput>
        </View>
      </View>
      <View style={styles.btnGrid}>
        <View style={styles.itemsWrap}>
          {list.map((item) => (
            <View style={styles.singleItem} key={item}>
              <TouchableOpacity style={styles.btn} onPress={() => UpdateValue(item)}>
                <Text style={styles.content}>{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    maxWidth: '95%',
    minWidth: '95%',
    maxHeight: '95%',
    alignSelf: 'center',
    marginTop: '2.5%',
    borderRadius: 30,
    overflow: 'hidden'

  },
  display: {
    marginTop: '5%',
    maxWidth: '90%',
    minWidth: '80%',
    minHeight: '30%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2%'
  },
  itemsWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  singleItem: {
    marginVertical: gap / 2,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
  btn: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "center",
    height: 30,
    borderRadius: 25
  },
  content: {
    fontSize: 20,
    color: 'black'
  },
  btnGrid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '7%'
  }
});

export default App;
