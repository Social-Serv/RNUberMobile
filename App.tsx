import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {
  componentId: string;
};

function App(props: Props) {
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
        onPress={() => {
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

function LoginScreen2(props: Props) {
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
        onPress={() => {
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

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;
