import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BsPersonFill, BsFillBookmarkFill, BsFillHouseFill } from 'react-icons/bs';

export function NavBar() {
  return(
    <View style={styles.navBar}>
      <View style={styles.navBarItem}>
        <BsFillHouseFill size={20} />
        <Text>Home</Text>
      </View>
      <View style={styles.navBarItem}>
        <BsFillBookmarkFill size={20} />
        <Text>Favoritos</Text>
      </View>
      <View style={styles.navBarItem}>
        <BsPersonFill size={30}/>
        <Text>Meu Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#EEE',
    position: 'absolute',
    bottom: 0,
    height: '10vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2rem',
    paddingVertical: '0.5rem',
    borderTopWidth: 1,
  },
  navBarItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});