import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BsPersonCircle, BsHeartFill, BsBookmarkPlusFill, BsShareFill } from 'react-icons/bs';

interface PitchProps {
  id: number,
  title: string;
  author: {
    name: string;
    city: string;
    state: string;
  };
};

export function PitchItem({ title, author }: PitchProps) {
  return (
    <View style={styles.pitchContainer}>
      <Text style={styles.pitchTitle}>{title}</Text>
      <View style={styles.pitchMenu}>
        <View style={styles.pitchMenuInfo}>
          <BsPersonCircle size={30} />
          <View style={styles.pitchMenuInfoUser}>
            <Text style={styles.pitchMenuItem}>{author.name}</Text>
            <Text style={styles.pitchMenuItem}>{author.city} - {author.state}</Text>
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
  );
}

const styles = StyleSheet.create({
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
})