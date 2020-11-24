import React from 'react';
import {AppRegistry, SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Component = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to Uber</Text>
    </SafeAreaView>
  );
};

Navigation.registerComponent('qqq', () => Component);

export default Component;
