import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyContext } from './AppContext';
import axios from "axios"
import Toast from 'react-native-toast-message';

export default function App() {
  const [Token, SetToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6MCwiZW1haWwiOiJ0ZXN0QGFpZ290LmNvbSIsInNjb3BlIjoiUEhBUk1BQ0lTVCIsImlkIjoiNjJhMzExN2ExMWMxY2I3ZDg1NGEwMzY3IiwiaXNBbGlhcyI6ZmFsc2UsImFsaWFzSWQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJpYXQiOjE2NTc1NDkzMDIsImV4cCI6MTY1NzU5MjUwMn0.3AuRVRrosaEX2EoeNWuZ7yIj_gyJOYQZgglYS2pKpu8")
  const [userData, SetUserData] = useState()

  async function getUser() {
    try {
      const res = await axios.get(`https://auth.develop.unifarco.aigotsrl-dev.com/api/user`, { headers: { "Authorization": `Bearer ${Token}` } })
      SetUserData(res.data)
    } catch (error) {
      console.log(error.response?.data)
    }
  }
  const SuccessToast = (text) => {
    Toast.show({
      type: 'success',
      text1: 'success',
      text2: text
    });
  }
  const FailedToast = (text) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: text
    });
  }
  const MainData =
  {
    Token, SetToken, userData, SuccessToast,FailedToast
  }

  // React.useEffect(() => { getUser() }, [])
  React.useEffect(() => { getUser() }, [Token])
  return (
    <SafeAreaProvider>
      <MyContext.Provider value={{ ...MainData }}>
        <Navigation />
        <Toast />
      </MyContext.Provider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

export function geToken() {
  return Token
}
