import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { BsFilter, BsPersonCircle, BsPersonFill, BsHeartFill, BsFillBookmarkFill, BsBookmarkPlusFill, BsShareFill, BsFillHouseFill } from 'react-icons/bs';
import { PitchItem } from '../../components/PitchItem';

const pitches = [
  {
    id: 0,
    title: 'Consultoria Sustentável',
    author: {
      name: 'UFABC',
      city: 'Santo André',
      state: 'SP',
    },
  },
  {
    id: 1,
    title: 'Indústria Sustentável',
    author: {
      name: 'UFABC',
      city: 'São Bernardo do Campo',
      state: 'SP',
    },
  },
];

export function Home() {
  return (
    <ScrollView style={styles.container}>
      {pitches.map(pitch => (
        <PitchItem key={pitch.id} id={pitch.id} title={pitch.title} author={pitch.author} />
      ))}
      <View style={styles.bottomSpacing}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "80vh",
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  pitchContainer: {
    borderWidth: 1,
    height: '80vh',
    width: '100%',
    padding: '1rem',
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
  bottomSpacing: {
    marginBottom: '10vh',
  }
});