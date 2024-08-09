import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'rgba(15, 105, 241, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 50,
  },
  searchInput: {
    flex: 1,
    color: '#000',
    backgroundColor: 'transparent',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#0F69F1',
  },
  filterIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: '#0F69F1',
    bottom: 15,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 0,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
});
