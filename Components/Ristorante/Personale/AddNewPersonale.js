import { View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import { Feather } from "react-native-vector-icons"
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios"
import { REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"

import { MyContext } from '../../../AppContext';
const AddNewPersonale = ({ visible, hideModal }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };
  const [PersonaleData, SetPersonaleData] = React.useState({ name: "", lastname: "", email: "", password: "", phone_number: "" })
  const { userData, Token } = useContext(MyContext)
  const [Error, SetError] = React.useState("")
  function handleChange(name, text) {
    SetPersonaleData({ ...PersonaleData, [name]: text })
  }
  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      SetPersonaleData({ ...PersonaleData, email: text })
      console.log("Email is Correct");
    }
  }
  const obj = {
    ...PersonaleData,
    aliasPermissions: {},
    pharmacist: userData._id,
  }
  const config = { headers: { Authorization: `Bearer ${Token}` } };
  async function AddNewPersonale() {
    if (!PersonaleData.email || !PersonaleData.password || !PersonaleData.name || !PersonaleData.lastname || !PersonaleData.phone_number) {

      SetError("Please fill all the Fields")
    } else {
      try {
        const res = await axios.post(`https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/aliases`,
          obj,
          config
        )
        console.log(res)

      } catch (error) {
        console.log(error)
      }
    }

  }
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ScrollView style={{ position: "relative" }}>
            <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, }}>
              <Feather name="x-circle" size={30} color="#00b27A" />
            </Pressable>
            <Text>Add a new Customer</Text>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Nome</Text>
            <TextInput onChangeText={(e) => handleChange("name", e)} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Nome" />
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Cognome</Text>
            <TextInput onChangeText={(e) => handleChange("lastname", e)} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Cognome" />
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Telefono</Text>
            <TextInput onChangeText={(e) => handleChange("phone_number", e)} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Telefono" keyboardType='numeric' />
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Email</Text>
            <TextInput onChangeText={(text) => validate(text)} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Email" />
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Password</Text>
            <TextInput onChangeText={(e) => handleChange("password", e)} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Password" secureTextEntry={true} />
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Genere</Text>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Maschio', value: 'Maschio' },
                { label: 'Femmina', value: 'Femmina' },

              ]}
            />
            <Text style={{ fontWeight: "600", fontSize: 18, color: "red" }}>{Error}</Text>

            <Pressable onPress={() => AddNewPersonale()} style={{ width: "80%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 30 }}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Aggiungi</Text>
            </Pressable>
          </ScrollView>
        </Modal>
      </Portal>

    </Provider>
  )
}

export default AddNewPersonale