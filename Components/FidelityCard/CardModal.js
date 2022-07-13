import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import { Feather } from "react-native-vector-icons"
import { AntDesign, Fontisto, EvilIcons } from "react-native-vector-icons"

const CardModal = ({ visible, hideModal }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ScrollView>
                        <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, zIndex: 10 }}>
                            <Feather name="x-circle" size={30} color="#00b27A" />
                        </Pressable>

                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View style={{ width: "30%", justifyContent: "center" }} >
                                <Image source={require("../../assets/IronIcon.png")} style={{ width: 120, height: 100, alignSelf: "center" }} resizeMode="contain" />
                            </View>
                            <View style={{ display: "flex", flexDirection: "column", }}>
                                <Text style={{ fontSize: 16, color: "#939393", fontWeight: "400" }}>IRON</Text>
                                <Text style={{ fontSize: 20, color: "black", fontWeight: "600" }}>Ian Salvatore</Text>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <AntDesign name="staro" color="#3BBA8B" size={25} />
                                    <Text style={{ fontSize: 16, color: "#3BBA8B", fontWeight: "700", marginLeft: 6 }}>174 points</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: '#BABABA',
                                        borderBottomWidth: 2, marginVertical: 10
                                    }}
                                />
                                <View style={{ width: "60%", height: 40, backgroundColor: "#f2f0f0", display: "flex", flexDirection: 'row', borderRadius: 8, justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 15 }}>
                                    <Pressable >
                                        <Fontisto name={"minus-a"} color="#3BBA8B" size={23} />
                                    </Pressable>
                                    <Text style={{ fontWeight: "500", fontSize: 22, color: '#4E4E4E' }}>1</Text>
                                    <Pressable >
                                        <AntDesign name="plus" color="#3BBA8B" size={27} />
                                    </Pressable>
                                </View>

                            </View>
                        </View>
                        <Pressable onPress={() => hideModal()} style={{ width: "40%", height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 20 }}>
                            <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                                Salva
                            </Text>
                        </Pressable>
                    </ScrollView>
                </Modal>
            </Portal>

        </Provider>
    )
}

export default CardModal