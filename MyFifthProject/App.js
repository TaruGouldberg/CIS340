import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'cyan', alignSelf: 'flex-end'}}/>
      <View style={{height: 50, backgroundColor: 'yellow', alignSelf: 'stretch'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'magenta'}}/>
    </View>
   
  );
}

