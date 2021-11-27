import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { Bookmarks } from './src/pages/Bookmarks';
import { Profile } from './src/pages/Profile';
import { Login } from './src/pages/Login';
import { SignUp } from './src/pages/SignUp';
import { TopBar } from './src/components/TopBar';
import { NavBar } from './src/components/NavBar';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0ruTxI42M9RlCViux_tDLCUVR6Yfz5jc",
  authDomain: "hackinrioelevator.firebaseapp.com",
  projectId: "hackinrioelevator",
  storageBucket: "hackinrioelevator.appspot.com",
  messagingSenderId: "483964540519",
  appId: "1:483964540519:web:e244cebd3fab8ab37326c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Home />
      <NavBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
