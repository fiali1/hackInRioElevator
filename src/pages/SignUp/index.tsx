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
      <View style={styles.formContainer}>
        <View style={styles.formSection}>
          <View style={styles.formSectionTitle}>
            <Text>Dados de Acesso</Text>
          </View>  
          <Input name="email" placeholder="E-mail" control={control} />
          <Input name="password" placeholder="Senha" control={control} />
          <Input name="passwordConfirm" placeholder="Confirme a senha" control={control} />
        </View>
        <View style={styles.formSection}>
          <View style={styles.formSectionTitle}>
            <Text>Informações de perfil</Text>
          </View>  
          <Input name="profileType" placeholder="Tipo de Perfil" control={control} />
          <Input name="name" placeholder="Nome" control={control} />
          <Input name="position" placeholder="Cargo/Função" control={control} />
          <Input name="city" placeholder="Cidade" control={control} />
          <Input name="state" placeholder="Estado" control={control} />
          <Input name="linkedin" placeholder="LinkedIn" control={control} />
        </View>
        <TouchableOpacity style={{ width: '100%' }}>
          <Button color="#006eff" onPress={onSubmit} title="Avançar" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    padding: '2rem',
  },
  formSection: {
    width: '100%', 
    marginBottom: '2rem',
  },
  formSectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    width: '100%',
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