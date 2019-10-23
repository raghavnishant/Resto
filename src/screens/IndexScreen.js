import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';




const IndexScreen = () => {

  const [term, setTerm] = useState('');
  const [results, searchAPI, errMessage] = useResults();


  const filterResultsByPrice = (price) => {

    return results.filter(result => {
      return result.price === price;
    })
  }
  

  return (
    <View style={{flex: 1}}>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit= {() => searchAPI(term)}
      />

      {errMessage ? <Text>{errMessage}</Text> : null}
      {/* <Text>We have Found {results.length} Results</Text> */}
      
      <ScrollView>
        <ResultsList title='Cost Effective' results={filterResultsByPrice('$')} />
      <ResultsList title='Bit Pricer' results={filterResultsByPrice('$$')} />
      <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

});


export default IndexScreen;