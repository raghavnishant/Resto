import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const {background, icon, input} = styles;

  return (
    <View style={background}>
        <Feather name='search' style={icon} />
        <TextInput 
          style={input}
          autoCapitalize= 'none'
          autoCorrect = {false}
          value = {term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}

        />
    </View>
  );
};

const styles= StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    marginHorizontal: 15,
    marginVertical: 10,
    height : 50,
    flexDirection: 'row',
    borderRadius: 5
  },
  icon:{
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  input: {
    flex: 1,
    fontSize: 18
  }
});


export default SearchBar;