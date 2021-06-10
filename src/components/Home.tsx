import React from 'react';
import trasparentbg from '../assets/img/keltamusta_laiturillaB.jpg';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const Home = (): JSX.Element => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={trasparentbg}
        resizeMode='contain'
        style={styles.transbg}
      />
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

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 14) / 16);
const imageTopMargin = -Math.round((dimensions.width * 4.1) / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 28,
    margin: 15,
    textAlign: 'center',
  },
  transbg: {
    width: imageWidth,
    height: imageHeight,
    marginBottom: 25,
    marginTop: imageTopMargin,
  },
  text: { fontSize: 17, marginBottom: 10, paddingLeft: 15, paddingRight: 15 },
});

export default Home;
