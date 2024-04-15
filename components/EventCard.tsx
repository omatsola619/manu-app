import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// @ts-ignore
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const EventCard = ({ data }: { data: { title: string; image: any } }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.wrapper}>
        <View style={styles.userDetails}>
          <Image source={data.image} style={styles.image} />
          <View>
            <Text style={styles.title}>Text Placeholder</Text>
            <View style={styles.statusRow}>
              <FontAwesome name="map-marker" size={14} color="#95b2fb" />
              <Text style={styles.status}>Text Placeholder</Text>
            </View>
            <View style={styles.statusRow}>
              <Ionicons name="musical-note-sharp" size={14} color="green" />
              <Text style={styles.status2}>Currently Playing - Text Placeholder</Text>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <SimpleLineIcons name="options-vertical" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 3,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 7,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 7,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
    color: 'black',
  },
  status: {
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    color: 'black',
  },
  status2: {
    fontSize: 13,
    fontFamily: 'Roboto_700Bold',
    color: 'gray',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
