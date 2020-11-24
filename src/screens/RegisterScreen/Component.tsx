import React from 'react';
import {AppRegistry, SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {screenIds} from '../index';

const Component = () => {
  return (
    <SafeAreaView>
      <Text>Register</Text>
    </SafeAreaView>
  );
};

Navigation.registerComponent(screenIds.LOGIN_SCREEN, () => Component);

export default Component;
