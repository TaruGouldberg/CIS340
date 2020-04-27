import React from 'react';
import { Text, View, FlatList } from 'react-native';


export default StatesApp = () => {
  return(
    <View style={{flex: 1, paddingTop:22}}>
      <FlatList
        data={[
          {key: 'Alabama'},
          {key: 'Alaska'},
          {key: 'Arizona'},
          {key: 'Arkansas'},
          {key: 'California'},
          {key: 'Colorado'},
          {key: 'Connecticut'},
          {key: 'Delaware'},
          {key: 'Florida'},
          {key: 'Georgia'},
          {key: 'Hawaii'},
          {key: 'Idaho'},
          {key: 'Illinois'},
          {key: 'Indiana'},
          {key: 'Iowa'},
          {key: 'Kansas'},
          {key: 'Kentucky'},
          {key: 'Louisiana'},
          {key: 'Maine'},
          {key: 'Maryland'},
          {key: 'Massachusetts'},
          {key: 'Michigan'},
          {key: 'Minnesota'},
          {key: 'Mississippi'},
          {key: 'Missouri'},
          {key: 'Montana'},
          {key: 'Nebraska'},
          {key: 'Nevada'},
          {key: 'New Hampshire'},
          {key: 'New Jersey'},
          {key: 'New Mexico'},
          {key: 'New York'},
          {key: 'North Carolina'},
          {key: 'North Dakota'},
          {key: 'Ohio'},
          {key: 'Oklahoma'},
          {key: 'Oregon'},
          {key: 'Pennsylvania'},
          {key: 'Rhode Island'},
          {key: 'South Carolina'},
          {key: 'South Dakota'},
          {key: 'Tennessee'},
          {key: 'Texas'},
          {key: 'Utah'},
          {key: 'Vermont'},
          {key: 'Virginia'},
          {key: 'Washington'},
          {key: 'West Virginia'},
          {key: 'Wisconsin'},
          {key: 'Wyoming'},

        ]}
        returnItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44 }}> {item.key} </Text>}

      />

    </View>

  );// end of return
}

