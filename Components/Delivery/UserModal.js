import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import { Feather } from "react-native-vector-icons"
const UserModal = ({ visible, hideModal }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View style={{ position: "relative" }}>

                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Image source={require("../../assets/Person.jpg")} style={{ width: 90, height: 90 }} />
                            <Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 10 }}>Michelangel{"\n"}Torpedine</Text>
                        </View>
                        <View style={{ marginVertical: 15 }}>
                            <Text style={{ fontWeight: "600", fontSize: 20, color: "#00B27A", marginBottom: 2 }}>Indirizzo</Text>
                            <Text style={{ fontWeight: "400", fontSize: 16, color: "black", marginBottom: 8 }}>Via Garibaldi, 8 - 56125 PI</Text>
                            <Text style={{ fontWeight: "600", fontSize: 20, color: "#00B27A", marginBottom: 2 }}>Contatto</Text>
                            <Text style={{ fontWeight: "400", fontSize: 16, color: "black", marginBottom: 8 }}>+39 3345678332</Text>
                            <Text style={{ fontWeight: "600", fontSize: 20, color: "#00B27A", marginBottom: 2 }}>Numero di Persone</Text>
                            <Text style={{ fontWeight: "400", fontSize: 16, color: "black", marginBottom: 8 }}>4</Text>
                            <Text style={{ fontWeight: "600", fontSize: 20, color: "#00B27A", marginBottom: 2 }}>Orario</Text>
                            <Text style={{ fontWeight: "400", fontSize: 16, color: "black", marginBottom: 8 }}>15:44</Text>
                        </View>
                        <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, }}>
                            <Feather name="x-circle" size={30} color="#00b27A" />
                        </Pressable>
                        <View style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                            <Pressable style={{ width: "40%", height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", alignSelf: "center", borderWidth: 1, borderColor: "#00B27A" , marginRight:15}}>
                                <Text style={{ fontWeight: "600", fontSize: 20, color: "#00B27A" }}>
                                    Conferma
                                </Text>
                            </Pressable>
                            <Pressable style={{ width: "40%", height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                                    Rifiuta
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </Portal>

        </Provider>
    )
}

export default UserModal