import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BsFilter } from 'react-icons/bs';

export function TopBar() {
  return(
    <View style={styles.topBar}>
      <Text style={styles.topBarTitle}>Explorar</Text>
      <BsFilter />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    fontSize: 24,
    height: '10vh',
    width: '100%',
    paddingHorizontal: '2rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    fontSize: 24,
  },
})