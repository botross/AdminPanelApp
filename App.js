import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyContext } from './AppContext';
import axios from "axios"
export default function App() {
  const [Token, SetToken] = useState()
  const [userData, SetUserData] = useState()
console.log(Token)
  async function getUser() {
    try {
      const res = await axios.get(`https://auth.develop.unifarco.aigotsrl-dev.com/api/user`, { headers: { "Authorization": `Bearer ${Token}` } })
      SetUserData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const MainData =
  {
    Token, SetToken
  }
  React.useEffect(() => { getUser() }, [Token])
  return (
    <SafeAreaProvider>
      <MyContext.Provider value={{ ...MainData }}>
        <Navigation />
      </MyContext.Provider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

