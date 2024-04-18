import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import avatar from '../assets/logo.jpg';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import EventCard from '../components/EventCard';
import { eventCardData } from '../data/dummyData';
import { NavigationProp } from '@react-navigation/native';
import { NavigationType } from '../type';

const Home = ({ navigation }: { navigation: NavigationType }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>
              Ma<Text style={styles.logoSpan}>Mu</Text>
            </Text>
            <View style={styles.likes}>
              <Text style={styles.username}>999</Text>
              <AntDesign name="heart" size={24} color="red" />
            </View>
          </View>

          {/* user info card  */}
          <View style={styles.userDetailsWrapper}>
            <View style={styles.userDetails}>
              <Image source={avatar} style={styles.logoImg} />
              <View>
                <Text style={styles.username}>Username Here</Text>
                <View style={styles.statusRow}>
                  <MaterialIcons name="message" size={14} color="#95b2fb" style={{}} />
                  <Text style={styles.status}>Status - Message Here</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}
              style={styles.searchBox}
            >
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* list of events here  */}
      <ScrollView style={styles.events}>
        <View style={styles.eventsHead}>
          <Text style={styles.eventTitle}>Your Events</Text>
          <Text onPress={() => navigation.navigate('AllEvents')} style={styles.eventLink}>
            See all
          </Text>
        </View>

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

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    position: 'relative',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 5,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: {
    color: '#e03186',
    fontFamily: 'TitanOne_400Regular',
    fontSize: 24,
  },
  logoSpan: {
    color: '#26d0e0',
    fontFamily: 'TitanOne_400Regular',
    fontSize: 24,
  },
  logoImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  username: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    color: 'black',
  },
  status: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    color: 'black',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  searchBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 60,
    borderRadius: 5,
    elevation: 2,
  },
  userDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  events: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 16,
  },
  eventsHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    color: 'black',
  },
  eventLink: {
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    color: 'grey',
    textDecorationLine: 'underline',
  },
  eventItem: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    position: 'absolute',
    bottom: 0,
  },
  eventBtn: {
    backgroundColor: '#22b7c5',
    padding: 15,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventBtnText: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    color: 'white',
  },
  cardWrapper: {
    marginBottom: 120,
  },
});
