import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/LOGO.jpg')}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',      
    top: 160,                  
    right: 20,                 
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 130,
    height: 145,
    borderRadius: 10,
    borderWidth: 3,            
    borderColor: '#0077B6', 
    marginTop: -100,
    marginRight: 115,
  },

});

export default Avatar;
