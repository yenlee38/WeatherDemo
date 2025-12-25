import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailScreen = ({location}) => {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>{location || ''}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
