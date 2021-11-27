import React, { useState } from 'react';
import { useForm, Control, useController, FieldValues, RegisterOptions, FieldName } from 'react-hook-form'
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View } from 'react-native';

import { signUpFluxogram as fluxogram } from '../../fluxograms/signUp';

interface FormProps {
  email: string;
  password: string;
  passwordConfirm: string;
  type: string;
  fullName: string;
  position: string;
  city: string;
  state: string;
  linkedin: string;
}

const Input = ({ name, placeholder, control }) => {
  const { field } = useController({
    control, 
    defaultValue: '',
    name,
  });

  return(
    <TextInput
      value={field.value}
      placeholder={placeholder}
      placeholderTextColor="#222"
      onChangeText={field.onChange}
      style={styles.formItem}
    />
  );
};

export function SignUp() {
  const { control, handleSubmit } = useForm<FormProps>();
  const onSubmit = handleSubmit(data => console.log(JSON.stringify(data)));

  return(
    <View style={styles.container}>
       <View style={styles.signUpBar}>
        <Text style={styles.signUpBarTitle}>Cadastrar</Text>
      </View>
      <View style={styles.signUpContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Entre ou Cadastre-se no Elevator</Text>
        </View>
        <View style={styles.formContainer}>
          <View>
            <View>
              </View>  
            <Input name="email" placeholder="E-mail" control={control} />
            <Input name="password" placeholder="Senha" control={control} />
            <Input name="passwordConfirm" placeholder="Confirmar senha" control={control} />
            <Input name="passwordConfirm" placeholder="Confirmar senha" control={control} />
          </View>
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
    justifyContent: 'space-between',
  },
  signUpBar: {
    fontSize: 24,
    height: '4rem',
    width: '100%',
    paddingHorizontal: '2rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  signUpBarTitle: {
    fontSize: 24,
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