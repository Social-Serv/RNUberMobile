/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// AppRegistry.registerComponent(appName, () => App);
import {name as appName} from './app.json';
import React, {useEffect} from 'react';
import {AppRegistry, Button, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

function App(props) {
  useEffect(() => {
    // if (!firebase.app.name) firebase.initializeApp(firebaseConfig);
    //
    // firebaseActions.login("rostik270900@gmail.com", "password");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Uber Mobile</Text>
      <Button
        title={'Push Login Screen'}
        onPress={async () => {
          console.log(props.componentId);
          Navigation.push(props.componentId, {
            component: {
              name: 'LoginScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Login Screen',
                  },
                },
              },
            },
          });
        }}
      />
    </View>
  );
}

function LoginScreen2(props) {
  useEffect(() => {
    // if (!firebase.app.name) firebase.initializeApp(firebaseConfig);
    //
    // firebaseActions.login("rostik270900@gmail.com", "password");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title={'Push Login Screen'}
        onPress={async () => {
          console.log(props.componentId);
          Navigation.push('mainComponentId', {
            component: {
              name: 'LoginScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Login Screen',
                  },
                },
              },
            },
          });
        }}
      />
    </View>
  );
}

Navigation.registerComponent('Home', () => App);
Navigation.registerComponent('LoginScreen', () => LoginScreen2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'mainComponentId',
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

// AppRegistry.registerComponent(appName, () => App);
