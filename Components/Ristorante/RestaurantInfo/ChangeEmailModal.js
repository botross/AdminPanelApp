import { View, Text, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import { Feather } from "react-native-vector-icons"

const ChangeEmailModal = ({ hideModal, visible }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ScrollView style={{ position: "relative" }}>
                        <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, }}>
                            <Feather name="x-circle" size={30} color="#00b27A" />
                        </Pressable>
                        <Text style={{ fontWeight: "700", fontSize: 22, color: "#00B27A", marginVertical: 10, alignSelf: "center" }}>Modifica Email</Text>

                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Vecchia Email</Text>
                        <TextInput  style={{ width: "100%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, alignSelf: 'center' }} placeholder="Vecchia Password" />


                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Nuova Email</Text>
                        <TextInput  style={{ width: "100%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, alignSelf: 'center' }} placeholder="Nuova Password" />




                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginVertical: 10 }}>
                            <Pressable style={{ width: "40%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", alignSelf: "center", marginTop: 30, borderWidth: 1, borderColor: "#00B27A" }}>
                                <Text style={{ color: "#A1A1A1", fontSize: 12, fontWeight: "600" }}>Annulla</Text>
                            </Pressable>
                            <Pressable style={{ width: "45%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 30 }}>
                                <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Salva</Text>
                            </Pressable>
                        </View>

                    </ScrollView>
                </Modal>
            </Portal>

        </Provider>
    )
}

export default ChangeEmailModal