import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { MaterialCommunityIcons } from "react-native-vector-icons"
const FidelityCard = ({ navigation }) => {
    return (
        <Header navigation={navigation} title="Fidelity Card" icon={require("../../assets/FidelityIcon.png")} >
            <Text style={{ fontWeight: "600", fontSize: 20, color: "#00B72A", paddingLeft: 10, marginVertical: 15 }}>Ogni quanti soldi spesi c’è un punto</Text>
            <TextInput style={{ width: "70%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, padding: 10, marginLeft: 15 }} placeholder="Inserisci qui il costo in euro" placeholderTextColor={"#989898"} />
            <Text style={{ fontWeight: "600", fontSize: 20, color: "#00B72A", paddingLeft: 10, marginVertical: 15 }}>Scegli il tipo di sconto</Text>
            <Pressable style={{ width: "50%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", marginTop: 5, marginLeft: 15 }}>
                <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                    Scegli Sconto
                </Text>
            </Pressable>
            <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', paddingLeft: 5, marginVertical: 20 }}>
                <View style={{ paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center', justifyContent: "center", backgroundColor: "#f6f6f6f6", marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: "300", fontSize: 16, color: "#989898" }}>
                        Percentuale di Sconto
                    </Text>
                </View>
                <View style={{ paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center', justifyContent: "center", backgroundColor: "#f6f6f6f6" , marginHorizontal: 5}}>
                    <Text style={{ fontWeight: "300", fontSize: 16, color: "#989898" }}>
                        Punteggio
                    </Text>
                </View>
                <MaterialCommunityIcons name="delete-circle" size={40} color="#C25039" />
            </View>
            <Pressable style={{ width: "60%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: "40%", marginLeft: 15 }}>
                <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                    Salva
                </Text>
            </Pressable>
        </Header>
    )
}

export default FidelityCard