import React, {Fragment} from 'react';
import {View} from 'react-native';
import Deneme from './src/deneme'
const App = () => {
  return (
    <View>
      <Deneme style={{width:200, height:200,backgroundColor:"red"}} name={"TypeScript ilk proje"} />
    </View>
  );
};
export default App;
