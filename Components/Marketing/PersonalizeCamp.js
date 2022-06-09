import { View, Text, Image, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { AntDesign, MaterialCommunityIcons } from "react-native-vector-icons"

const PersonalizeCamp = ({ navigation }) => {
    return (
        <Header navigation={navigation} title="Marketing" icon={require("../../assets/MarketingIcon.png")}>
            <ScrollView style={{ marginBottom: 100 }}>

                <Text onPress={() => navigation.goBack()} style={{ fontSize: 20, fontWeight: "600", color: "#00B27A", marginLeft: 15 }}><AntDesign name="back" color="#00B27A" size={25} /> Back</Text>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", marginVertical: 15 }}>
                    <View style={{ borderRadius: 100, borderWidth: 8, alignSelf: "flex-start", borderTopColor: "#FFA425", borderBottomColor: "#E44825", borderLeftColor: "#BE4E9F", borderRightColor: "#78BE40", marginRight: 15 }}>
                        <Image source={require("../../assets/Person3.jpg")} style={{ width: 120, height: 120, borderRadius: 100 }} />
                    </View>
                    <View>
                        <Text style={{ color: "#FFA425", fontWeight: "600", fontSize: 18 }}>Profilo Utente</Text>
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>Nome: <Text style={{ fontWeight: "500" }}>Utente Medio</Text></Text>
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>Età: <Text style={{ fontWeight: "500" }}> 18-25</Text></Text>
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>Genere: <Text style={{ fontWeight: "500" }}> Umo</Text></Text>
                    </View>
                </View>

                <View style={{ display: "flex", marginVertical: 15, flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-evenly" }}>
                    <View style={{ width: "28%", borderRightWidth: 2, borderStyle: "dotted", borderColor: "#BE4E9F", paddingLeft: 10 }}>
                        <Text style={{ color: "#BE4E9F", fontWeight: "600", fontSize: 18, marginBottom: 2 }}>Social</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Facebook</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Instagram</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Sito web</Text>
                    </View>
                    <View style={{ width: "28%", borderRightWidth: 2, borderStyle: "dotted", borderColor: "#78BE40", paddingLeft: 10 }}>
                        <Text style={{ color: "#78BE40", fontWeight: "600", fontSize: 18, marginBottom: 2 }}>Device</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Telefono</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Tablet</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16, opacity: 0 }}>Tablet</Text>
                    </View>
                    <View style={{ width: "28%", paddingLeft: 10 }}>
                        <Text style={{ color: "#E44825", fontWeight: "600", fontSize: 18, marginBottom: 2 }}>Interessi</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Viaggi</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Shopping</Text>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Creativita</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: "600", fontSize: 18, color: "black", marginTop: 10, paddingLeft: 10 }}>Lista Coinvolta</Text>
                <Pressable style={{ width: "80%", alignSelf: "center", height: 40, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#FFA425", justifyContent: "center", borderRadius: 10 }}>
                    <MaterialCommunityIcons name="star-circle-outline" color="#FFA425" size={30} />
                    <Text style={{ color: "#FFA425", fontWeight: "400", fontSize: 16, marginLeft: 10 }}>Lista Lorem Ipsum</Text>
                </Pressable>
                <Text style={{ fontWeight: "600", fontSize: 18, color: "black", marginTop: 10, paddingLeft: 10 }}>Call to Action</Text>
                <Pressable style={{ width: "80%", alignSelf: "center", height: 40, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#00B27A", justifyContent: "center", borderRadius: 10 }}>
                    <Text style={{ color: "#00B27A", fontWeight: "400", fontSize: 16 }}>Scopri di più</Text>
                </Pressable>
                <Text style={{ fontWeight: "600", fontSize: 18, color: "black", marginTop: 10, paddingLeft: 10 }}>Tipo di Pacchetto</Text>
                <Pressable style={{ width: "80%", alignSelf: "center", height: 40, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10, backgroundColor: "#00B27A", justifyContent: "center", borderRadius: 10 }}>
                    <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>200 $</Text>
                </Pressable>
                <Text style={{ fontWeight: "600", fontSize: 18, color: "black", marginTop: 10, paddingLeft: 10 }}>Descrizione</Text>
                <TextInput value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque elit laoreet condimentum imperdiet. ' style={{ width: "80%", height: 100, borderRadius: 10, backgroundColor: "#f8f8f8", marginLeft: 20, marginTop: 15, padding: 15, textAlignVertical: "top" }} multiline={true} />
                <Pressable style={{ width: "90%", alignSelf: "center", height: 40, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 15, backgroundColor: "#00B27A", justifyContent: "center", borderRadius: 10 }}>
                    <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>Avviva Campagna</Text>
                </Pressable>
            </ScrollView>


        </Header>
    )
}

export default PersonalizeCamp