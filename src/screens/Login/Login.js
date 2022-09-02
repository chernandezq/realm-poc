import {Realm, useApp} from '@realm/react';
import {useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {AuthService} from '../../services';

export const Login = () => {
  const app = useApp();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

  const mutation = useMutation(AuthService.logIn, {
    onSuccess: data => {
      // Invalidate and refetch
      console.warn(data);
    },
    onError: error => {
      console.warn(error.response);
    },
  });

  const loginMutation = () => {
    mutation.mutate({
      username: email,
      password: password,
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>

        <Button
          mode="contained"
          onPress={() => login()}
          style={{marginTop: 20}}>
          Login with Realm
        </Button>

        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button
          mode="contained"
          onPress={() => loginMutation()}
          disabled={mutation.isLoading}
          style={{marginTop: 20}}>
          Login with credentials
        </Button>
      </View>
    </SafeAreaView>
  );
};
