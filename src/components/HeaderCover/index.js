import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import NameTitle from '../NameTitle';

const HeaderCover = ({ isDarkMode }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/header.jpg')}
        style={styles.headerBackground}
      >
        <NameTitle isDarkMode={isDarkMode} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderBottomWidth: 4,
    borderBottomColor: '#0077B6',
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default HeaderCover;