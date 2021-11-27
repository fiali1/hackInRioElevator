import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Bookmarks() {
  return(
    <View style={styles.container}>
      <View style={styles.bookmarkBar}>
        <Text style={styles.bookmarkBarTitle}>Favoritos</Text>
      </View>
      <View style={styles.bookmarksContainer}>
        <View style={styles.bookmarkItem}>
          <Text style={styles.bookmarkTitle}>Consultoria Sustentável</Text>
          <Text style={styles.bookmarkInfo}>UFABC - Santo André - SP</Text>
        </View>
        <View style={styles.bookmarkItem}>
          <Text style={styles.bookmarkTitle}>Consultoria Sustentável</Text>
          <Text style={styles.bookmarkInfo}>UFABC - Santo André - SP</Text>
        </View>
        <View style={styles.bookmarkItem}>
          <Text style={styles.bookmarkTitle}>Consultoria Sustentável</Text>
          <Text style={styles.bookmarkInfo}>UFABC - Santo André - SP</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookmarkBar: {
    fontSize: 24,
    height: '4rem',
    width: '100%',
    paddingHorizontal: '2rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  bookmarkBarTitle: {
    fontSize: 24,
  },
  bookmarksContainer: {
    width: '100%',
    padding: '1rem',
    flex: 1,
  },
  bookmarkItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '1rem',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: '1rem',
  },
  bookmarkTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  bookmarkInfo: {
    fontSize: 16,
  }
});