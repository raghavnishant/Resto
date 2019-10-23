import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const ResultDetail = ({result }) => {
  const {image, container, name} = styles;

  

  return (
    <View style={container}>
      <Image source={{ uri: result.image_url}} style={image}/>
      <Text style={name}>{result.name}</Text>
      <Text>{result.ratings} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 10
  },
  image: {
    height: 120,
    width: 250,
    marginVertical: 10,
    borderRadius: 5
    
  },
  name: {
    fontWeight: 'bold'
  }
})

export default ResultDetail;