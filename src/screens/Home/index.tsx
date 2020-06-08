import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ImageBackground
        imageStyle={{ width: 274, height: 368 }}
        source={require('../../assets/home-background.png')}
        style={styles.container}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            autoCapitalize="characters"
            autoCorrect={false}
            maxLength={2}
            onChangeText={setUf}
            placeholder="Digite a UF"
            style={styles.input}
            value={uf}
          />

          <TextInput
            autoCorrect={false}
            onChangeText={setCity}
            placeholder="Digite a cidade"
            style={styles.input}
            value={city}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon color="#FFF" name="arrow-right" size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;
