import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { ImageBackground, Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points');
  }

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

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Icon color="#FFF" name="arrow-right" size={24} />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
