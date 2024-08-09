import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../utils/colors';
function FullScreenLoader() {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]} testID="loader">
      <ActivityIndicator focusable size="large" color={COLORS.BUTTON_BLUE} />
    </View>
  );
}

export default FullScreenLoader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    flex: 1,
    elevation: 1,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
  },
  spinner: {
    marginBottom: 50,
  },
  black: {
    backgroundColor: 'black',
  },
});
