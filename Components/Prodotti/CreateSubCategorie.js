import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { Ionicons } from "react-native-vector-icons"
const CreateSubCategorie = ({ navigation }) => {
    return (
        <Header navigation={navigation} title="Create Sub Menu" icon={require("../../assets/ProdottiIcon.png")} >
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
                    <Ionicons name="arrow-back-circle" color="#00B27A" size={50} />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: "700", color: "#00B27A", alignSelf: "center" }}>Crea un nuovo Sotto Menu</Text>
            </View>
            <View style={{ width: "60%", paddingVertical: 70, borderWidth: 2, borderColor: "#00B27A", borderStyle: "dashed", alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, marginVertical: 25 }}>
                <Ionicons name="add-circle" color="#00B27A" size={70} />
                <Text style={{ fontSize: 24, fontWeight: "700", color: "#00B27A", textAlign: "center", padding: 10, }}>Carica un'immagine per il Menu</Text>
            </View>
            <TextInput style={{ width: "70%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: "center" }} placeholder="Nome Menu" />
            <Pressable style={{ width: "70%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginVertical: 20 }}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Aggiungi</Text>
            </Pressable>
        </Header>
    )
}

export default CreateSubCategorie