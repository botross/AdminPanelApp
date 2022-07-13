import { View, Text, Platform, Pressable, ScrollView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import { Feather } from "react-native-vector-icons"
const ReserveManuallyModal = ({ visible, hideModal }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ScrollView>
                        <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, }}>
                            <Feather name="x-circle" size={30} color="#00b27A" />
                        </Pressable>
                        <Text style={{ fontWeight: "700", fontSize: 22, color: "#00B27A", marginVertical: 10, alignSelf: "center" }}>Prenotazione Manuale</Text>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Nome</Text>
                        <TextInput style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Cognome</Text>
                        <TextInput style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Numero di Telefono</Text>
                        <TextInput style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Numero di persone</Text>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}

                            items={[
                                { label: '1', value: '1' },
                                { label: '2', value: '2' },
                                { label: '3', value: '3' },
                                { label: '4', value: '4' },

                            ]}
                        />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Seleziona un tavolo</Text>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            style={
                                Platform.OS === 'ios'
                                    ? pickerSelectStyles.inputIOS
                                    : pickerSelectStyles.inputAndroid
                            }
                            items={[
                                { label: '1', value: '1' },
                                { label: '2', value: '2' },
                                { label: '3', value: '3' },
                                { label: '4', value: '4' },

                            ]}
                        />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Ora e Data di prenotazione</Text>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}

                            items={[
                                { label: '1', value: '1' },
                                { label: '2', value: '2' },
                                { label: '3', value: '3' },
                                { label: '4', value: '4' },

                            ]}
                        />
                        <Pressable style={{ width: "60%", height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginVertical: 30 }}>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Salva Prenotazione</Text>
                        </Pressable>
                    </ScrollView>
                </Modal>
            </Portal>

        </Provider>
    )
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default ReserveManuallyModal