// src/components/Bio/index.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Bio = ({ isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bioText, setBioText] = useState(
    'I am a third-year IT student with a passion for technology and problem-solving. I enjoy exploring different aspects of the IT field and continually expanding my knowledge. Outside of academics, I love making friends and building connections with people from diverse backgrounds.');

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
   
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>
        About Me 
      </Text>
      {isEditing ? (
        <TextInput
          style={[styles.bioInput, isDarkMode && styles.darkInput]}
          value={bioText}
          onChangeText={setBioText}
          multiline
        />
      ) : (
        <Text style={[styles.bioText, isDarkMode ? styles.darkBioText : styles.lightBioText]}>
          {bioText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },

    bioText: {
        fontSize: 16,
        marginBottom: 10,
        },


    //Light Mode
  container: {
    width: 370,
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: '#0077B6',
    marginTop: -400,
    marginBottom: 255,
  },

  lightTitle: {
    color: '#000', 
  },

  lightBioText: {
    color: '#000',
  },

  bioInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#bf53ff',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#ADE8F4',
    marginBottom: 10,
  },

  lightButton: {
    backgroundColor: '#ffe5ff',
  },

  // Dark Mode
  darkContainer: {
    backgroundColor: '#3e3e3e',
  },
  
  darkTitle: {
    color: '#fff', 
  },
  
  darkBioText: {
    color: '#fff',
  },
  
  darkInput: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
  },
 
  darkButton: {
    backgroundColor: '#a5678e',
  },
 
});

export default Bio;