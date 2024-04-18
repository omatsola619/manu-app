import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
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
  username: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    color: 'black',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  backSect: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  backText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
  },
  cardWrapper: {
    paddingBottom: 120,
  },
  events: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 16,
  },
  searchBox: {
    backgroundColor: 'white',
    paddingTop: 15,
  },
  eventItem: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    position: 'absolute',
    bottom: 160,
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
});
