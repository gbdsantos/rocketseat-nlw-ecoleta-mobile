import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />
    </View>
  );
};

export default Home;
