import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';



const ResultsList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
              <ResultDetail result={item}/>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  }
})


export default withNavigation(ResultsList);