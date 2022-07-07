import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyContext } from './AppContext';
import axios from "axios"

export default function App() {
  const [Token, SetToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6MCwiZW1haWwiOiJ0ZXN0QGFpZ290LmNvbSIsInNjb3BlIjoiUEhBUk1BQ0lTVCIsImlkIjoiNjJhMzExN2ExMWMxY2I3ZDg1NGEwMzY3IiwiaXNBbGlhcyI6ZmFsc2UsImFsaWFzSWQiOm51bGwsInBlcm1pc3Npb25zIjpudWxsLCJpYXQiOjE2NTcxOTA5NzYsImV4cCI6MTY1NzIzNDE3Nn0.LR1-He0TEIb3qpIaVadWcu0lGMaguGEwKGla2UErFu4")
  const [userData, SetUserData] = useState()


  async function getUser() {
    try {
      const res = await axios.get(`https://auth.develop.unifarco.aigotsrl-dev.com/api/user`, { headers: { "Authorization": `Bearer ${Token}` } })
      SetUserData(res.data)
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  const MainData =
  {
    Token, SetToken,userData
  }

  React.useEffect(() => { getUser() },[])
  return (
    <SafeAreaProvider>
      <MyContext.Provider value={{ ...MainData }}>
        <Navigation />
      </MyContext.Provider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

export function geToken() {
  return Token
}
