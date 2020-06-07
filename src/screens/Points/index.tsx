import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';

import api from '../../services/api';

import styles from './styles';

interface Item {
  id: number;
  name: string;
  image_url: string;
}

const Points = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('items').then((response) => {
      setItems(response.data);
    });
  }, []);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
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
          {items.map((item) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={String(item.id)}
              onPress={() => handleSelectItem(item.id)}
              style={[
                styles.item,
                selectedItems.includes(item.id) ? styles.selectedItem : {},
              ]}
            >
              <SvgUri height={42} width={42} uri={item.image_url} />
              <Text style={styles.itemTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Points;
