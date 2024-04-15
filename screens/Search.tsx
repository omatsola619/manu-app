import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import SearchCard from '../components/SearchCards';
import { searchCardData } from '../data/dummyData';

const Search = () => {
  const [text, setText] = React.useState('');
  const [data, setData] = useState(searchCardData);

  const filteredItems = data.filter((item) => {
    return item.title.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          label="Search here..."
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
        />
      </View>

      {/* search results here  */}
      <ScrollView style={styles.results}>
        {filteredItems.length === 0 ? (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultNoFound}>No Place found</Text>
          </View>
        ) : (
          filteredItems.map((item, i) => <SearchCard key={i} data={item} />)
        )}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 15,
  },
  results: {
    paddingHorizontal: 16,
  },
  resultsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  resultNoFound: {
    fontSize: 17,
    fontFamily: 'Roboto_400Regular',
  },
});
