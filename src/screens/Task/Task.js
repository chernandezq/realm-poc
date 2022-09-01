import {useUser} from '@realm/react';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Button, List} from 'react-native-paper';
import RealmContext from '../../database';

const {useRealm, useQuery} = RealmContext;

export const Task = () => {
  const user = useUser();
  const realm = useRealm();

  async function logout() {
    user.logOut();
  }

  async function addTask() {
    realm.write(() => {
      realm.create('User', {
        _id: 5,
        name: 'Test',
        isActive: true,
      });
    });
  }

  const tasks = useQuery('User');

  return (
    <View>
      <Text>Hola {user?.id}</Text>

      {tasks.map(task => {
        return <List.Item title={task.name} />;
      })}

      <Button
        mode="contained"
        onPress={() => addTask()}
        style={{marginTop: 20}}>
        Add user
      </Button>

      <Button mode="contained" onPress={() => logout()} style={{marginTop: 20}}>
        Logout
      </Button>
    </View>
  );
};
