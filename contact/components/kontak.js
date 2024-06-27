import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Contact({ gambar, judul, telpon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.telp}>{telpon}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});
