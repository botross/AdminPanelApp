import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import UserModal from '../Reservation/UserModal';
import { Table, Row, Rows } from 'react-native-table-component';

const Reservation = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [isActive, SetActive] = React.useState(0)



    const tableHead = ['Nome cliente', 'Data', 'Orario', 'Azioni']
    const tableData = [
        [
            ' Michelangelo Torpedine',
            '19/05/2022',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ]
        ,
        [
            ' Michelangelo Torpedine',
            '19/05/2022',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ],
        [
            ' Michelangelo Torpedine',
            '19/05/2022',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ],
        [
            ' Michelangelo Torpedine',
            '19/05/2022',
            '15:44',
            <Pressable onPress={() => showModal()} style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10, alignSelf: "center" }}>
                <Text style={{ color: "white" }}>Vedi</Text>
            </Pressable>
        ]
    ]
    return (
        <Header navigation={navigation} title="Reservation" icon={require("../../assets/PrenotazioniIcon.png")}>
            <ScrollView style={{ width: "95%", alignSelf: "center", marginBottom:120 }}>
                <View style={{ width: "95%", height: 240, backgroundColor: "#F8F8F8", borderRadius: 10, alignSelf: "center", marginVertical: 30, padding: 15 }}>
                    <Text style={{ fontWeight: "700", fontSize: 26, color: "#00B27A" }}>Tavoli Prenotati</Text>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginVertical: 20 }}>

                        <Pressable style={{ alignSelf: "center", marginHorizontal: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: "700", fontSize: 20, color: '#323232', marginBottom: 10 }}>Laundi</Text>
                                <View style={{ width: 170, height: 90, backgroundColor: "white", borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: "400", fontSize: 14, color: '#636363', alignSelf: "center", marginBottom: 10 }}>14 Febbraio</Text>
                                    <View style={{ paddingHorizontal: 13, paddingVertical: 6, borderRadius: 25, backgroundColor: "#FFA563" }}>
                                        <Text style={{ fontWeight: "400", fontSize: 14, color: 'white', alignSelf: "center" }}>Clienti attesi: 10</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable style={{ alignSelf: "center", marginHorizontal: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: "700", fontSize: 20, color: '#323232', marginBottom: 10 }}>Martedì</Text>
                                <View style={{ width: 170, height: 90, backgroundColor: "white", borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: "400", fontSize: 14, color: '#636363', alignSelf: "center", marginBottom: 10 }}>15 Febbraio</Text>
                                    <View style={{ paddingHorizontal: 13, paddingVertical: 6, borderRadius: 25, backgroundColor: "#FFA563" }}>
                                        <Text style={{ fontWeight: "400", fontSize: 14, color: 'white', alignSelf: "center" }}>Clienti attesi: 10</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable style={{ alignSelf: "center", marginHorizontal: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: "700", fontSize: 20, color: '#323232', marginBottom: 10 }}>Laundi</Text>
                                <View style={{ width: 170, height: 90, backgroundColor: "white", borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: "400", fontSize: 14, color: '#636363', alignSelf: "center", marginBottom: 10 }}>16 Febbraio</Text>
                                    <View style={{ paddingHorizontal: 13, paddingVertical: 6, borderRadius: 25, backgroundColor: "#FFA563" }}>
                                        <Text style={{ fontWeight: "400", fontSize: 14, color: 'white', alignSelf: "center" }}>Clienti attesi: 10</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                    </ScrollView>
                </View>

                <View style={{ alignSelf: "center", marginBottom: 30 }} >
                    <View style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: 'row', backgroundColor: "#F7F7F7", alignSelf: "flex-start", borderRadius: 15 }}>
                        <Pressable onPress={() => SetActive(0)} style={{ width: 140, height: 40, backgroundColor: isActive === 0 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: isActive !== 0 ? "#A1A1A1" : "white", fontWeight: "600", fontSize: 12 }}>
                                Prenotazioni in attesa
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => SetActive(1)} style={{ width: 160, height: 40, backgroundColor: isActive === 1 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: isActive !== 1 ? "#A1A1A1" : "white", fontWeight: "600", fontSize: 12 }}>
                                Prenotazioni accettate
                            </Text>
                        </Pressable>
                    </View>
                </View>


                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: "100%" }}>
                    <View style={{ flex: 1, padding: 5, paddingTop: 30, backgroundColor: '#fff', width: "95%", alignSelf: "center" }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#D9D9D9' }}>
                            <Row data={tableHead} widthArr={[130, 100, 60, 100]} style={{ height: 60, backgroundColor: '#00B27A' }} textStyle={{ margin: 6, color: "#fff" }} />
                            <Rows onPress={() => showModal()} data={tableData} widthArr={[130, 100, 60, 100]} textStyle={{ padding: 6 }} />

                        </Table>
                    </View>
                </ScrollView>

            </ScrollView>


            <UserModal visible={visible} hideModal={hideModal} />

        </Header>
    )
}

export default Reservation

