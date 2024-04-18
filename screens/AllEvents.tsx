import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/AllEvents';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { NavigationType } from '../type';
import { eventCardData } from '../data/dummyData';
import EventCard from '../components/EventCard';
import { TextInput } from 'react-native-paper';

const AllEvents = ({ navigation }: { navigation: NavigationType }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
              style={styles.backSect}
            >
              <AntDesign name="left" size={18} color="black" />
              <Text style={styles.backText}>Your Event</Text>
            </TouchableOpacity>
            <View style={styles.likes}>
              <Text style={styles.username}>999</Text>
              <AntDesign name="heart" size={24} color="red" />
            </View>
          </View>

          <View style={styles.searchBox}>
            <TextInput
              label="Search here..."
              value={text}
              onChangeText={(text) => setText(text)}
              mode="outlined"
            />
          </View>
        </View>
      </SafeAreaView>

      {/* list of events here  */}
      <ScrollView style={styles.events}>
        {/* cards start here  */}
        <View style={styles.cardWrapper}>
          {eventCardData.map((item, i) => (
            <EventCard key={i} data={item} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.eventItem}>
        <TouchableOpacity activeOpacity={0.7} style={styles.eventBtn}>
          <Text style={styles.eventBtnText}>Create New Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllEvents;
