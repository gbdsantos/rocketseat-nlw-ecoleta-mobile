import React from 'react';
import { ImageBackground, Image, Text, View } from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <ImageBackground
      imageStyle={{ width: 274, height: 368 }}
      source={require('../../assets/home-background.png')}
      style={styles.container}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}> Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Text>
      </View>

      <View style={styles.footer}></View>
    </ImageBackground>
  );
};

export default Home;
