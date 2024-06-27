import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Detail = ({ navigation, route }) => {
  const { gambar, nama, telpon } = route.params.contact;

  // Biodata details for each person
  const biodata = {
    "Delinda Mega Putri": {
      umur: 20,
      alamat: 'Kp. Sukaraja',
      jurusan: 'S1 Teknik Informatika',
      hobi: 'Membaca dan Menulis',
    },
    "Rani Febriani": {
      umur: 20,
      alamat: 'Kp. Bedeng 2',
      jurusan: 'S1 Teknik Informatika',
      hobi: 'Berenang dan Membaca',
    },
    "Tanaya Salsabila A": {
      umur: 20,
      alamat: 'Kp. Cipetir',
      jurusan: 'S1 Teknik Informatika',
      hobi: 'Menonton Film dan Mendengarkan Musik',
    },
    "Ilyasa Nur": {
      umur: 20,
      alamat: 'Kp. Pasirhalang 04/08 jl.pasirhalang no. 119 Desa Langensari kecamatan sukaraja kabupaten sukabumi',
      jurusan: 'S1 Teknik Informatika',
      hobi: 'Bermain Gitar dan Bernyanyi',
    },
    "Dian Sela Anjelina": {
      umur: 20,
      alamat: 'Jagaraksa Permai, Jl. RH. Didi Sukardi, Jayaraksa, Baros',
      jurusan: 'S1 Teknik Informatika',
      hobi: 'Menonton Film',
    },
    "M Fadhil Abdillah": {
      umur: 21,
      alamat: 'Jalan Pelabuan II Km 7 Tegallega',
      jurusan: 'S1 Teknik Informatika',
      hobi: 'Menonton Film',
    }
  };

  const currentBiodata = biodata[nama];

  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <Text style={styles.title}>{nama}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Umur:</Text>
        <Text style={styles.text}>{currentBiodata.umur}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Alamat:</Text>
        <Text style={styles.text}>{currentBiodata.alamat}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Jurusan:</Text>
        <Text style={styles.text}>{currentBiodata.jurusan}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Hobi:</Text>
        <Text style={styles.text}>{currentBiodata.hobi}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Telpon:</Text>
        <Text style={styles.text}>{telpon}</Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
  },
  text: {
    flex: 1,
  },
});

export default Detail;

