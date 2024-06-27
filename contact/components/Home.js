import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import Contact from './kontak'; 

const contacts = [
  {
    nama: "Delinda Mega Putri",
    gambar: require("../assets/gambar_delin.png"),
    telpon: "085524520937",
  },
  {
    nama: "Rani Febriani",
    gambar: require("../assets/gambar_rani.jpg"),
    telpon: "085846664256",
  },
  {
    nama: "Tanaya Salsabila A",
    gambar: require("../assets/gambar_naya.png"),
    telpon: "085795024030",
  },
  {
    nama: "Ilyasa Nur",
    gambar: require("../assets/gambar_ilyasa.png"),
    telpon: "087785597468",
  },
  {
    nama: "Dian Sela Anjelina",
    gambar: require("../assets/gambar_dian.png"),
    telpon: "08156193245",
  },
  {
    nama: "M Fadhil Abdillah",
    gambar: require("../assets/gambar_fadhil.png"),
    telpon: "089663984287",
  },
];

const HomeScreen = ({ navigation }) => {
  const handlePress = (contact) => {
    navigation.navigate('Detail', { contact });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Daftar Teman</Text>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          gambar={contact.gambar}
          judul={contact.nama}
          telpon={contact.telpon}
          onPress={() => handlePress(contact)} 
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
   title: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center', 
  },
});

export default HomeScreen;
