import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LabelValue from '../../../components/labelValue';
import {ICON} from '../../../assets/png';
import {getTemp} from '../../../helps/string';

const FavoriteItem = ({
  location,
  temperature,
  description,
  iconUrl,
  humidity,
  windSpeed,
  onRemove,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <LabelValue label="Location" value={location} />
      <LabelValue label="Temperature" value={getTemp(temperature)} />
      <View style={styles.row}>
        <LabelValue label="Description" value={description} />
        <Image source={{uri: iconUrl}} style={styles.imgIcon} />
      </View>
      <LabelValue label="Humidity" value={humidity} />
      <LabelValue label="WindSpeed" value={windSpeed} />
      <View style={styles.bottomItem}>
        <TouchableOpacity activeOpacity={1} onPress={onRemove}>
          <Image
            source={ICON.HEART}
            style={[styles.imgFavIcon, styles.favoriteIcon]}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  favoriteIcon: {
    tintColor: 'red',
  },
  imgFavIcon: {
    height: 24,
    width: 24,
    tintColor: 'gray',
  },
  imgIcon: {
    height: 24,
    width: 24,
  },
  container: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomItem: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
