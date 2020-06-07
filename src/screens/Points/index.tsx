import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';

import styles from './styles';

const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon color="#34cb79" name="arrow-left" size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta.
        </Text>

        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: -23.6517833,
              longitude: -46.8049875,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
            style={styles.map}
          >
            <Marker
              coordinate={{
                latitude: -23.6517833,
                longitude: -46.8049875,
              }}
              onPress={handleNavigateToDetail}
              style={styles.mapMarker}
            >
              <View style={styles.mapMarkerContainer}>
                <Image
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
                  }}
                  style={styles.mapMarkerImage}
                />
                <Text style={styles.mapMarkerTitle}>Mercado</Text>
              </View>
            </Marker>
          </MapView>
        </View>
      </View>

      <View style={styles.itemsContainer}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <SvgUri
              height={42}
              width={42}
              uri="http://192.168.1.2:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <SvgUri
              height={42}
              width={42}
              uri="http://192.168.1.2:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <SvgUri
              height={42}
              width={42}
              uri="http://192.168.1.2:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <SvgUri
              height={42}
              width={42}
              uri="http://192.168.1.2:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <SvgUri
              height={42}
              width={42}
              uri="http://192.168.1.2:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <SvgUri
              height={42}
              width={42}
              uri="http://192.168.1.2:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Points;
