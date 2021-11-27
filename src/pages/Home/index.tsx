import React from 'react';

import { BsFilter, BsPersonCircle, BsPersonFill, BsHeartFill, BsFillBookmarkFill, BsBookmarkPlusFill, BsShareFill, BsFillHouseFill } from 'react-icons/bs';

import { StyleSheet, Text, View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.homeBar}>
        <Text style={styles.homeBarTitle}>Explorar</Text>
        <BsFilter />
      </View>
      <View style={styles.pitchContainer}>
        <Text style={styles.pitchTitle}>Consultoria Sustentável</Text>
        <View style={styles.pitchMenu}>
          <View style={styles.pitchMenuInfo}>
            <BsPersonCircle size={30} />
            <View style={styles.pitchMenuInfoUser}>
              <Text style={styles.pitchMenuItem}>UFABC</Text>
              <Text style={styles.pitchMenuItem}>Santo André - SP</Text>
            </View>
          </View>
          <View style={styles.pitchMenuFunctions}>
            <Text>100K</Text>
            <View style={styles.iconContainer}><BsHeartFill /></View>
            <View style={styles.iconContainer}><BsBookmarkPlusFill /></View>
            <View style={styles.iconContainer}><BsShareFill /></View>
          </View>
        </View>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid black',
  },
  homeBar: {
    fontSize: 24,
    height: '4rem',
    width: '100%',
    paddingHorizontal: '2rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid red',
  },
  homeBarTitle: {
    fontSize: 24,
  },
  pitchContainer: {
    width: '100%',
    padding: '1rem',
    flex: 1,
    justifyContent: 'space-between',
  },
  pitchTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  pitchMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pitchMenuInfoUser: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '1rem',
  },
  pitchMenuInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pitchMenuItem: {
    margin: '0',
  },
  pitchMenuFunctions: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    height: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    padding: '0.75rem',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
  },
  navBar: {
    height: '5rem',
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