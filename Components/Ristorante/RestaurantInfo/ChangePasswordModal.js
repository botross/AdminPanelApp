import { View, Text, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import { Feather, Entypo } from "react-native-vector-icons"

const ChangePasswordModal = ({ hideModal, visible }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };
    const [ShowPassword, SetShowPassword] = React.useState({ old: true, new: true, NewAgain: true })

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ScrollView style={{ position: "relative" }}>
                        <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, }}>
                            <Feather name="x-circle" size={30} color="#00b27A" />
                        </Pressable>
                        <Text style={{ fontWeight: "700", fontSize: 22, color: "#00B27A", marginVertical: 10, alignSelf: "center" }}>Modifica Password</Text>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Vecchia Password</Text>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", position: "relative", marginBottom: 10, }}>
                            <TextInput secureTextEntry={ShowPassword.old} style={{ width: "100%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, alignSelf: 'center' }} placeholder="Vecchia Password" />
                            <Pressable onPress={() => SetShowPassword({ ...ShowPassword, old: !ShowPassword.old })} style={{ position: "absolute", right: 0, marginRight: 15 }}>
                                <Entypo name={ShowPassword.old ? "eye" : "eye-with-line"} size={30} color="#00b27A" />
                            </Pressable>
                        </View>

                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Nuova Password</Text>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", position: "relative", marginBottom: 10, }}>
                            <TextInput secureTextEntry={ShowPassword.new} style={{ width: "100%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, alignSelf: 'center' }} placeholder="Nuova Password" />
                            <Pressable onPress={() => SetShowPassword({ ...ShowPassword, new: !ShowPassword.new })} style={{ position: "absolute", right: 0, marginRight: 15 }}>
                                <Entypo name={ShowPassword.new ? "eye" : "eye-with-line"} size={30} color="#00b27A" />
                            </Pressable>
                        </View>

                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#323232", marginVertical: 10, alignSelf: "center" }}>Ripeti Password</Text>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", position: "relative", marginBottom: 10, }}>
                            <TextInput secureTextEntry={ShowPassword.NewAgain} style={{ width: "100%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, alignSelf: 'center' }} placeholder="Ripeti Password" />
                            <Pressable onPress={() => SetShowPassword({ ...ShowPassword, NewAgain: !ShowPassword.NewAgain })} style={{ position: "absolute", right: 0, marginRight: 15 }}>
                                <Entypo name={ShowPassword.NewAgain ? "eye" : "eye-with-line"} size={30} color="#00b27A" />
                            </Pressable>
                        </View>
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

export default ChangePasswordModal