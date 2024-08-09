import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  webSourceButton: {
    flexDirection: 'row',
    backgroundColor: '#0F69F11A',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 100,
    alignItems: 'center',
  },
  webSourceText: {
    fontSize: 14,
    color: '#007BFF',
  },
  webSourceIcon: {
    height: 18,
    width: 18,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 20,
    lineHeight: 20.83,
  },
  metaData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  author: {
    fontSize: 14,
    color: '#666666',
  },
  date: {
    fontSize: 14,
    color: '#666666',
  },
  content: {
    marginTop: 20,
    fontSize: 16,
    color: '#333333',
    fontWeight: '400',
    lineHeight: 25,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});
