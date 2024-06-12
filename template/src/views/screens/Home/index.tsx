import React, {FC} from 'react';
import {View} from 'react-native';

import {UserScreenProps} from '@src/types';
import routes from '@navigation/routes';
import {
  Button,
  PhoneInput,
  TextInput,
  DropDown,
  Text,
  ActivityIndicator,
  Icon,
  Image,
} from '@src/views/ui';
import {MainLayout} from '@src/views/wrappers';
import {Car} from 'phosphor-react-native';

const Home: FC<UserScreenProps<typeof routes.HOME>> = () => {
  return (
    <MainLayout
      barType="search"
      scrollProps={{
        contentContainerStyle: {
          padding: 12,
          gap: 12,
        },
      }}>
      <Text size="h5">Welcome to React Native Template</Text>
      <ActivityIndicator size={50} />
      <Icon Icon={Car} size={50} weight="duotone" />
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://th.bing.com/th?id=OIP.BvBtSHIo41EFTN8J7TeAWgHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&dpr=1.3&pid=3.1&rm=2',
        }}
      />
      <TextInput label="TextInput" placeholder="Enter Anything" />
      <TextInput
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
      />
      <PhoneInput
        countryCode="NP"
        required
        label="Phone Number"
        placeholder="Enter Phone Number"
      />
      <DropDown
        label="Multiple DropDown"
        type="multiple"
        required
        items={[
          {label: 'apple', value: 'apple'},
          {label: 'ball', value: 'ball'},
          {label: 'cat', value: 'cat'},
        ]}
        setValue={value => console.log(value)}
      />
      <DropDown
        label="DropDown"
        type="single"
        items={[
          {label: 'apple', value: 'apple'},
          {label: 'ball', value: 'ball'},
          {label: 'cat', value: 'cat'},
        ]}
        setValue={value => console.log(value)}
      />
      <Button title="Button" />
    </MainLayout>
  );
};

export default Home;
