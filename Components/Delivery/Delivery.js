import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { Octicons } from "react-native-vector-icons"
import UserModal from '../Reservation/UserModal';
import { Table, Row, Rows } from 'react-native-table-component';
const Delivery = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);



    const [isActive, SetActive] = React.useState(0)

    const tableHead = ['Nome cliente', 'Prezzo Totale', 'Orario', 'Azioni']
    const tableData = [
        [
            ' Michelangelo Torpedine',
            '€ 54,39',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ]
        ,
        [
            ' Michelangelo Torpedine',
            '€ 54,39',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ],
        [
            ' Michelangelo Torpedine',
            '€ 54,39',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ],
        [
            ' Michelangelo Torpedine',
            '€ 54,39',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ]
    ]


    return (
        <Header navigation={navigation} title="Delivery" icon={require("../../assets/DeliveryIcon.png")} >



            <ScrollView style={{ width: "95%", alignSelf: "center" }}>

                <Pressable onPress={() => navigation.navigate("AdvancedSettings")} style={{ paddingHorizontal: 22, height: 50, marginBottom: 30, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                    <Octicons name="diff-added" color="#00B27A" size={25} />
                    <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginLeft: 10 }}>Seleziona categorie</Text>
                </Pressable>


                <View style={{ alignSelf: "center", marginBottom: 30 }} >
                    <View style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: 'row', backgroundColor: "#F7F7F7", alignSelf: "flex-start", borderRadius: 15 }}>
                        <Pressable onPress={() => SetActive(0)} style={{ width: 140, height: 40, backgroundColor: isActive === 0 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: isActive !== 0 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                                Cronologia
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => SetActive(1)} style={{ width: 140, height: 40, backgroundColor: isActive === 1 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: isActive !== 1 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                                Cronologia
                            </Text>
                        </Pressable>
                    </View>
                </View>


                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: "100%" }}>
                    <View style={{ flex: 1, padding: 5, paddingTop: 30, backgroundColor: '#fff', width: "95%", alignSelf: "center" }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#D9D9D9' }}>
                            <Row data={tableHead} widthArr={[130, 90, 60, 100]} style={{ height: 60, backgroundColor: '#00B27A' }} textStyle={{ margin: 6, color: "#fff" }} />
                            <Rows onPress={() => showModal()} data={tableData} widthArr={[130, 90, 60, 100]} textStyle={{ padding: 6 }} />

                        </Table>
                    </View>
                </ScrollView>

            </ScrollView>
            <UserModal visible={visible} hideModal={hideModal} />

        </Header>
    )
}

export default Delivery


