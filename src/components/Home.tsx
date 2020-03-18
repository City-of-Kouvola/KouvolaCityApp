import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Home = (): JSX.Element => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Kouvolassa asuu Suomen onnellisimmat naapurit (Asuntomessubarometrin
        mukaan). Meillä on elävä maaseutu ja rentoa pikkukaupungin sykettä.
        Kymijoki halkoo maaseutua järvineen. Raiteet ja tiet kuljettavat
        näppärästi minne tarvitsee.
      </Text>
      <Text style={styles.text}>
        Kouvolassa tapahtuu paljon ja asioita tehdään tunteella: musiikkia,
        teatteria, taiteita, urheilua ja yrittäjyyttä. Mukavan kokoisessa
        kaupungissamme kaikki palvelut ja harrastukset ovat sopivan lähellä.
      </Text>
      <Text style={styles.text}>
        Kouvolalaisten leppoisa ja mutkaton elämäntyyli tarttuu helposti ja
        ihmiset täällä ovat oikein mukavaa porukkaa.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 28,
    margin: 15,
    textAlign: 'center',
  },
  text: { fontSize: 17, marginBottom: 10 },
});

export default Home;
