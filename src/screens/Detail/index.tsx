import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon color="#34cb79" name="arrow-left" size={20} />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri:
              'https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
          }}
        />

        <Text style={styles.pointName}>Mercadão do Francisco</Text>
        <Text style={styles.pointItems}>Lâmpadas, Óleo de Cozinha</Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>Taboão da Serra, SP</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton onPress={() => {}} style={styles.button}>
          <FontAwesome color="#FFF" name="whatsapp" suze={20} />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton onPress={() => {}} style={styles.button}>
          <Icon color="#FFF" name="mail" suze={20} />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
