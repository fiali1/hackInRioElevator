import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { BsPersonCircle, BsPencilFill } from 'react-icons/bs';

export function Profile() {
  return(
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userContainer}>
          <View style={styles.editProfile}>
            <BsPencilFill />
          </View> 
          <BsPersonCircle size={80} style={{marginBottom: '1rem'}} />
          <View>
            <Text style={styles.title}>Nome de Usuário</Text>
            <Text style={styles.userInfo}>Cargo/Posição</Text>
            <Text style={styles.userInfo}>São Paulo - SP</Text>
          </View>
        </View>
        <View style={styles.interestsContainer}>
          <View style={styles.tab}>
            <Text style={styles.title}>Meus Interesses</Text>
          </View>
          <View style={styles.interestsList}>
            <View style={styles.interestsItem}><Text>Reciclagem</Text></View>
            <View style={styles.interestsItem}><Text>Consultoria</Text></View>
            <View style={styles.interestsItem}><Text>Energia</Text></View>
            <View style={styles.interestsItem}><Text>Indústria</Text></View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              color='#333'
              title="Adicionar interesse"
              onPress={() => {}}
            ></Button>
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <View style={styles.tab}>
            <Text style={styles.title}>Sobre</Text>  
            <BsPencilFill />
          </View> 
          <TextInput
            style={styles.aboutInput}
            onChangeText={() => {}}
            value={""}
            placeholder="Sobre"
            keyboardType="default"
            multiline={true}
            numberOfLines={4}
          />
          <View style={styles.buttonContainer}>
            <Button
              color='#333'
              title="LinkedIn"
              onPress={() => {}}
            ></Button>
          </View>
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
  profileContainer: {
    width: '100%',
    paddingVertical: '2rem',
    paddingHorizontal: '1rem',
    flex: 1,
  },
  userContainer: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10rem',
    marginBottom: '2rem',
  },
  editProfile: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  userInfo: {
    fontSize: 16
  },
  interestsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '2rem',
  },
  interestsList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  interestsItem: {
    backgroundColor: 'grey',
    padding: '1rem',
    marginRight: '0.25rem',
    fontSize: 14,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  aboutInput: {
    width: '100%',
    height: '6rem',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#333',
    padding: '0.5rem',
    marginBottom: '1rem',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: 20, 
    fontWeight: '500',
  }
})
