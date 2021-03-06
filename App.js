import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native'
import Navigation from './Navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyContext } from './AppContext';
import axios from "axios"
import Toast from 'react-native-toast-message';

export default function App() {
  const [Token, SetToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6MCwiZW1haWwiOiJhbGVzc2lvLmZlcnJhcmlAYWlnb3QuY29tIiwic2NvcGUiOiJQSEFSTUFDSVNUIiwiaWQiOiI2MmQ3ZDFkOTZhZWQzYjFhMzkzZDE1MzYiLCJpc0FsaWFzIjpmYWxzZSwiYWxpYXNJZCI6bnVsbCwicGVybWlzc2lvbnMiOm51bGwsImlhdCI6MTY1ODQ3MzMyNywiZXhwIjoxNjU4NTE2NTI3fQ.jfkA2q8TC740lHK1vr6_Ti-VYfbiXRMgvyYTvaSUDHs")
  const [userData, SetUserData] = useState()
  const [loading, SetLoading] = useState(false)
  async function getUser() {
    SetLoading(true)
    try {
      const res = await axios.get(`https://auth.develop.rc.aigotsrl-dev.com/api/user`, { headers: { "Authorization": `Bearer ${Token}` } })
      SetUserData(res.data)
    } catch (error) {
      console.log(error.response?.data)
    }
    SetLoading(false)
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
    Token, SetToken, userData, SuccessToast, FailedToast
  }


  React.useEffect(() => {
    const ac = new AbortController();
    getUser()
    return () => ac.abort();
  }, [Token])
  return (
    <SafeAreaProvider>

      <MyContext.Provider value={{ ...MainData }}>
        <Navigation />
        <Toast />
      </MyContext.Provider>
      {loading &&
        <View style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: "#F5FCFF88"
        }}>

          <ActivityIndicator size="large" color="#00B27A" />
        </View>

      }

      <StatusBar style="auto" />
    </SafeAreaProvider >
  );
}

export function geToken() {
  return Token
}
