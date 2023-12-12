import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { NewsContainer } from '../modules/news/NewsContainer';
const trasparentbg = require('../assets/img/Pohjoiseen_laajakuva_vaaka.jpg');

const Home = ({ navigation }: any): JSX.Element => {

  const [isScrolling, setIsScrolling] = useState(false)
  
  const returnToTop = () => {
    scrollViewRef.current?.scrollTo({
      y: imageHeight,      
    })
  }
  const scrollViewRef = useRef<ScrollView>(null)
  
  return (
    <ScrollView 
      style={styles.container} 
      ref={scrollViewRef} 
      onScrollBeginDrag={() => {
        if (!isScrolling) setIsScrolling(true)
      }}
      onMomentumScrollEnd={() => {
        if (isScrolling) setIsScrolling(false)
      }}
    >
      <Image
        source={trasparentbg}
        resizeMode='contain'
        style={styles.transbg}
      />
      <NewsContainer navigation={{...navigation}} returnToTop={returnToTop} isScrolling={isScrolling} />
    </ScrollView>
  );
};

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 6) / 16);
const imageTopMargin = -Math.round((dimensions.width * 0.1) / 16);
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
    maxHeight: imageHeight,
    marginTop: imageTopMargin,
    marginBottom: 25,
  },
  text: { fontSize: 17, marginBottom: 10, paddingLeft: 15, paddingRight: 15 },
});

export default Home;
