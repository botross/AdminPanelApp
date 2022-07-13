import { View, Text, Platform, Pressable, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Feather } from "react-native-vector-icons"
const ReserveManuallyModal = ({ visible, hideModal }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const [Date, SetDate] = React.useState()
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        SetDate(date.toLocaleString() )
        hideDatePicker();
    };
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
                        <TextInput style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Nome" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Cognome</Text>
                        <TextInput style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Cognome" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Numero di Telefono</Text>
                        <TextInput style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Telefono" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Numero di persone</Text>
                        <TextInput keyboardType='numeric' style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Numero di persone" />

                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Seleziona un tavolo</Text>
                        <View style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }}>

                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                style={
                                    Platform.OS === 'ios'
                                        ? pickerSelectStyles.inputIOS
                                        : pickerSelectStyles.inputAndroid
                                }
                                items={[
                                    { label: 'Tavolo 1', value: 'Tavolo 1' },
                                    { label: 'Tavolo 2', value: 'Tavolo 2' },
                                    { label: 'Tavolo 3', value: 'Tavolo 3' },
                                    { label: 'Tavolo 4', value: 'Tavolo 4' },
                                ]}
                            />
                        </View>

                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Ora e Data di prenotazione</Text>
                        <Pressable onPress={()=>showDatePicker()} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center', justifyContent:"center" }}>
                            <Text >{Date}</Text>
                        </Pressable>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
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
        borderColor: 'purple',
        backgroundColor: "red",
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