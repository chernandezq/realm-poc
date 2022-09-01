import {Realm, useApp} from '@realm/react';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const Login = () => {
  const app = useApp();

  async function login() {
    let user;
    try {
      const credentials = Realm.Credentials.emailPassword(
        'ing.cristianh@gmail.com',
        '1saH3rnandez10',
      );
      user = await app.logIn(credentials);

      return user;
    } catch (error) {
      throw `Error logging in anonymously: ${JSON.stringify(error, null, 2)}`;
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>

        <Button
          mode="contained"
          onPress={() => login()}
          style={{marginTop: 20}}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};
