import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderCover from './src/components/HeaderCover';
import Avatar from './src/components/Avatar';
import Bio from './src/components/Bio'; 
import DarkModeToggle from './src/components/DarkMode';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkBackground]}>
      <HeaderCover isDarkMode={isDarkMode} />
      <Avatar />
      <DarkModeToggle toggle={toggleDarkMode} isDarkMode={isDarkMode} />
      <Bio isDarkMode={isDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
  },
  darkBackground: {
    backgroundColor: '#023E8A',
  },
});
