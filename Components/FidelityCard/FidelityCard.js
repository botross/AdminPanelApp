import { View, Text, TextInput, Pressable, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Ionicons, EvilIcons } from "react-native-vector-icons"
import CardModal from './CardModal'
const FidelityCard = ({ navigation }) => {
    const [isActive, SetActive] = React.useState(0)

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const Buttons =
        [
            {
                id: 0,
                name: "Tutti",
            },
            {
                id: 1,
                name: "Iron",
            },
            {
                id: 2,
                name: "Bronze",
            },
            {
                id: 3,
                name: "Silver",
            },
            {
                id: 4,
                name: "Gold",
            },
        ]
    return (
        <Header navigation={navigation} title="Fidelity Card" icon={require("../../assets/FidelityIcon.png")} >
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginVertical: 20 }}>
                <Pressable style={{ width: "40%", height: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", }}>
                    <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Associa QR Code Cliente</Text>
                </Pressable>
                <Pressable style={{ width: "40%", height: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", }}>
                    <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Aggiungi Punti al Cliente</Text>
                </Pressable>
            </View>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginBottom: 15, maxHeight: 80, minHeight: 80 }} >
                {Buttons.map((btn, index) => {
                    return (
                        <TouchableOpacity onPress={() => SetActive(btn.id)} key={index} style={{ paddingVertical: 20, borderBottomWidth: 2, borderBottomColor: isActive === btn.id ? "#00B27A" : "#AEAEAE", width: 120, alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "700", color: isActive === btn.id ? "#00B27A" : "#AEAEAE" }}>{btn.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

            <View style={{ width: "95%", display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", position: "relative", marginBottom: 15 }}>
                <TextInput onChangeText={(text) => handleSearch(text)} style={{ height: 50, width: "100%", backgroundColor: "#F6F6F6", borderRadius: 15, padding: 10, alignSelf: "center" }} placeholder="Cerca tramite nome utente " />
                <Ionicons name="search-outline" size={30} color="#3BBA8B" style={{ position: "absolute", right: 10 }} />
            </View>
            <ScrollView >

                <Pressable
                    onPress={() => { showModal() }}
                    style={{
                        width: "90%",
                        paddingVertical: 15,
                        borderRadius: 15,
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.21,
                        shadowRadius: 7.68,
                        elevation: 10,
                        paddingHorizontal: 10,
                        marginVertical: 15
                    }}>
                    <View style={{ width: "20%", justifyContent: "center" }} >
                        <Image source={require("../../assets/IronIcon.png")} style={{ height: 80, alignSelf: "center" }} resizeMode="contain" />
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", }}>
                        <Text style={{ fontSize: 16, color: "#939393", fontWeight: "400" }}>IRON</Text>
                        <Text style={{ fontSize: 20, color: "black", fontWeight: "600" }}>Ian Salvatore</Text>
                        <View
                            style={{
                                borderBottomColor: '#BABABA',
                                borderBottomWidth: 2, marginVertical: 10
                            }}
                        />
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <EvilIcons name="location" color="#3BBA8B" size={25} />
                            <Text style={{ fontSize: 14, color: "#606060", fontWeight: "400", marginLeft: 6 }}>Nato il 08/04/1997</Text>

                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <AntDesign name="gift" color="#3BBA8B" size={25} />
                            <Text style={{ fontSize: 14, color: "#606060", fontWeight: "400", marginLeft: 6 }}>Roma, Italy</Text>

                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10, position: "absolute", right: 9 }}>
                        <AntDesign name="staro" color="#3BBA8B" size={25} />
                        <Text style={{ fontSize: 16, color: "#3BBA8B", fontWeight: "700", marginLeft: 6 }}>174 points</Text>
                    </View>
                </Pressable>


                {/* <Pressable style={{ width: "60%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center" }}>
                <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                    Salva
                </Text>
            </Pressable> */}
            </ScrollView>
                <CardModal visible={visible} hideModal={hideModal} />
        </Header>
    )
}

export default FidelityCard