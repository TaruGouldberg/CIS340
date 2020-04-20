import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View >
      <Text>Hey, my name is {props.name}. I am student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340</Text>
      <Student name="Taru Gouldberg"/>
      <Student name="Alice Something"/>
      <Student name="Billy Bob"/>
      <Student name="H. G. Wells"/>
    </View>
  );

}

