import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type DetailsProps = {
  route: {
    params: {
      productId: string;
    };
  };
};

const Details = ({ route }: DetailsProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { productId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.screen}>Details Screen</Text>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to first Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    fontSize: 24,
    color: '#000000',
  },
  smallText: {
    fontSize: 18,
    color: '#000000',
  },
});
