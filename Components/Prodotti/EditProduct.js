import { View, Text, ScrollView, TextInput, Pressable, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from 'react-native-vector-icons'
import React from 'react'
import Header from '../../Reuseable/Header'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const EditProduct = ({ navigation }) => {
    return (
        <Header navigation={navigation} title="Edit Product" icon={require("../../assets/ProdottiIcon.png")} >

            <ScrollView style={{ marginBottom: 90 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back-circle" color="#00B27A" size={50} />
                </Pressable>
                <View style={{ width: "100%", alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center" }}>

                        <Image source={require("../../assets/pizza.png")} style={{ width: 160, height: 140 }} />


                        <Text style={{ color: "#00B27A", fontWeight: "700", fontSize: 26, width: "50%", alignSelf: "center", textAlign: "center" }}>Modifica prodotto</Text>

                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Nome prodotto</Text>
                        <TextInput value='Lorem ipsum dolor' style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Ingredienti</Text>
                        <TextInput value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis quis ridiculus at ultricies nunc. " multiline={true} style={{ width: "95%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, padding: 10, marginBottom: 10, alignSelf: 'center', textAlignVertical: "top" }} placeholder="Inserisci qui gli ingredienti..." />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Allergeni</Text>
                        <TextInput value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis quis ridiculus at ultricies nunc. " multiline={true} style={{ width: "95%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, padding: 10, marginBottom: 10, alignSelf: 'center', textAlignVertical: "top" }} placeholder="Inserisci qui gli allergeni..." />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Informazioni Aggiuntive:</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialCommunityIcons name="fire" color="#C25039" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Piccante</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox isChecked size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
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


                    <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", marginVertical: 15 }}>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Formato</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>Piccola</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Prezzo</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>€ 4,00</Text>
                        </View>
                        <MaterialCommunityIcons name="delete-circle" color="#C2222B" size={35} />
                    </View>


                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Aggiungi Opzione Extra</Text>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "white", display: "flex", flexDirection: "row", borderWidth: 1, borderColor: "#00B27A", marginVertical: 10 }}>
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginRight: 10 }}>Aggiungi Opzione Extra</Text>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                    </Pressable>


                    <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", marginVertical: 15 }}>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Extra</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>Pomodorini</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Prezzo</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>€ 4,00</Text>
                        </View>
                        <MaterialCommunityIcons name="delete-circle" color="#C2222B" size={35} />
                    </View>



                    <Pressable style={{ width: "80%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 30 }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Aggiungi</Text>
                    </Pressable>
                    <Pressable style={{ width: "80%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", alignSelf: "center", marginTop: 20, borderWidth: 1, borderColor: "#00B27A", marginBottom: 40 }}>
                        <Text style={{ color: "#00B27A", fontSize: 20, fontWeight: "600" }}>Torna Indietro</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </Header>
    )
}

export default EditProduct