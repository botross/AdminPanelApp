import { View, Text, ScrollView, TextInput, Pressable } from 'react-native'
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from 'react-native-vector-icons'
import React from 'react'
import Header from '../../Reuseable/Header'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CreateProduct = ({ navigation }) => {
    return (
        <Header navigation={navigation} title="Create Product" icon={require("../../assets/ProdottiIcon.png")} >
            <ScrollView style={{ marginBottom: 90 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back-circle" color="#00B27A" size={50} />
                </Pressable>
                <View style={{ width: "100%", alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                        <View style={{
                            width: 160, height: 140, shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.21,
                            shadowRadius: 7.68,
                            elevation: 10,
                            borderRadius: 10,
                            alignItems: "center", justifyContent: "center",
                            backgroundColor:"white"
                        }}>
                            <Ionicons name="add-circle" color="#00B27A" size={50} />
                            <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 14 }}>Carica immagine</Text>

                        </View>
                        <Text style={{ color: "#00B27A", fontWeight: "700", fontSize: 26, width: "50%", alignSelf: "center", textAlign: "center" }}>Crea un nuovo elemento</Text>

                    </View>

                    <View style={{marginTop:20}}>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Nome prodotto</Text>
                        <TextInput style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Ingredienti</Text>
                        <TextInput style={{ width: "95%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci qui gli ingredienti..." />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Allergeni</Text>
                        <TextInput style={{ width: "95%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci qui gli allergeni..." />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Informazioni Aggiuntive:</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialCommunityIcons name="fire" color="#C25039" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Piccante</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialCommunityIcons name="tree" color="#25BE35" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Vegano</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialCommunityIcons name="tree-outline" color="#00B27A" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Vegetariano</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialIcons name="do-not-disturb" color="#2B65BB" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Senza Glutine</Text>
                        </View>
                    </View>

                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Aggiungi Formato e Prezzo</Text>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "white", display: "flex", flexDirection: "row", borderWidth: 1, borderColor: "#00B27A", marginVertical: 10 }}>
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginRight: 10 }}>Aggiungi Formato e Prezzo</Text>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                    </Pressable>

                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Aggiungi Opzione Extra</Text>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "white", display: "flex", flexDirection: "row", borderWidth: 1, borderColor: "#00B27A", marginVertical: 10 }}>
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginRight: 10 }}>Aggiungi Opzione Extra</Text>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                    </Pressable>

                    <Pressable style={{ width: "80%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 30 }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Aggiungi</Text>
                    </Pressable>
                    <Pressable style={{ width: "80%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", alignSelf: "center", marginTop: 20, borderWidth: 1, borderColor: "#00B27A", marginBottom:40}}>
                        <Text style={{ color: "#00B27A", fontSize: 20, fontWeight: "600" }}>Torna Indietro</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </Header>
    )
}

export default CreateProduct