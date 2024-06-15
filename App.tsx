import React from 'react';
import {
  Dimensions,
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const cardWidth = screenWidth * 0.9;

const LoveBucket = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
          }}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>Elon Musk</Text>
            <Text style={styles.bio}>
              'A dude with a rocket is looking for a gal with fuel'
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: cardWidth,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: 'flex-end',

    position: 'absolute',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 17,
  },
  cardInner: {
    padding: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  bio: {
    fontSize: 10,
    color: 'white',
    lineHeight: 25,
  },
});

export default LoveBucket;
