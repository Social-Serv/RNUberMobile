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
import {TextField} from 'react-native-ui-lib';
import {screenIds, SCREENS} from './src/screens';
import Component from './src/screens/LoginScreen';

const dbServiceUrl = 'https://uber-main-db.herokuapp.com/';
const driverServiceUrl = 'https://uber-driver.herokuapp.com/api/driver';

function App(props) {
  useEffect(() => {
    // if (!firebase.app.name) firebase.initializeApp(firebaseConfig);
    //
    // firebaseActions.login("rostik270900@gmail.com", "password");
  }, []);

  const getDriver = async () => {
    const body = {driver_id: '123456'};
    const name = await fetch(driverServiceUrl + '/get/123456', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('driver:', json);
        return json.first_name + ' ' + json.last_name;
      });
    console.log('name:', name);
  };

  const postDriver = async () => {
    const body = {
      id: '123456',
      email: 'rostik@gmail.com',
      phone: '+38012345678',
      first_name: 'Rostyslav',
      middle_name: 'Hennadii',
      last_name: 'Makhanko',
      capacity: 5,
      car_class_id: 3,
      note: '...',
      accepts_rides: true,
      on_the_ride: false,
      car_status_id: 1,
      coord_latitude: 2.42343243,
      coord_longtitude: 20.4534543,
    };

    fetch(driverServiceUrl + '/put/123456', {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('status:', response.status);
        console.log('response:', response);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  const postDriverDirectlyToDB = async () => {
    const body = {
      id: '2UJoDWbQhEZiAlUtwfLclaQMti15',
      email: 'rostik@gmail.com',
      phone: '+38012345678',
      first_name: 'Rostyslav',
      middle_name: 'Hennadii',
      last_name: 'Makhanko',
      capacity: 5,
      car_class_id: 3,
      note: '...',
      accepts_rides: true,
      on_the_ride: false,
      car_status_id: 1,
      coord_latitude: 2.42343243,
      coord_longtitude: 20.4534543,
    };

    fetch(dbServiceUrl + '/api/front/car/', {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('status:', response.status);
        console.log('response:', response);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Uber Mobile</Text>
      <View style={{padding: 10}}>
        <Button
          title={'Push Login Screen'}
          onPress={async () => {
            console.log(props.componentId);
            Navigation.push(props.componentId, {
              component: {
                name: screenIds.LOGIN_SCREEN,
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
      <Button
        title={'Push Register Screen'}
        onPress={async () => {
          console.log(props.componentId);
          Navigation.push(props.componentId, {
            component: {
              name: screenIds.REGISTER_SCREEN,
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
      <Button
        title={'Fetch'}
        onPress={() => {
          getDriver();
        }}
      />
      <Button
        title={'Post Driver'}
        onPress={() => {
          postDriver();
        }}
      />
      <Button
        title={'Post Driver to DB'}
        onPress={() => {
          postDriverDirectlyToDB();
        }}
      />
      <Button
        title={'Get Driver'}
        onPress={() => {
          getDriver();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Navigation.registerComponent('Home', () => App);

//Register Screens
Object.entries(SCREENS).forEach(([key, value]) => {
  console.log(value);
  Navigation.registerComponent(value.id, value.generator);
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
