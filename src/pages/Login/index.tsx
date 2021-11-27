import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View } from 'react-native';

export function Login() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return(
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Entre ou Cadastre-se no Elevator</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.formItem} placeholder="E-mail" placeholderTextColor="#222" value={email} onChangeText={email => setEmail(email)} />
          <TextInput style={styles.formItem} placeholder="Senha" placeholderTextColor="#222" value={password} onChangeText={password => setPassword(password)} />
          <TouchableOpacity style={{ width: '100%' }}>
            <Button color="#006eff" onPress={() => {}} title="Login" />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Button color="#505064" onPress={() => {}} title="Cadastre-se" />
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
    justifyContent: 'center',
  },
  profileContainer: {
    width: '80%',
    flex: 1,
    justifyContent: 'center',

  },
  headerContainer: {
    width: '100%',
    paddingVertical: '1rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  header: {
    flex: 1,
    fontSize: 34,
    fontWeight: '700',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  formItem: {
    width: '100%',
    height: '2rem',
    backgroundColor: '#C4C4C4',
    borderWidth: 1,
    paddingHorizontal: '0.5rem',
    paddingVertical: '0.25rem',
    marginBottom: '1rem',
  },
  signUpContainer: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: '1rem',
  }
  
});