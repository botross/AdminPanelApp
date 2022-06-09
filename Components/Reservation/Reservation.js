import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { DataTable } from 'react-native-paper';
import UserModal from '../Reservation/UserModal';

const Reservation = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


    const optionsPerPage = [2, 3, 4];
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    const [isActive, SetActive] = React.useState(0)
    return (
        <Header navigation={navigation} title="Reservation" icon={require("../../assets/PrenotazioniIcon.png")}>
            <ScrollView style={{ width: "95%", alignSelf: "center" }}>
                <View style={{ width: "95%", height: 240, backgroundColor: "#F8F8F8", borderRadius: 10, alignSelf: "center", marginVertical: 30, padding: 15 }}>
                    <Text style={{ fontWeight: "700", fontSize: 26, color: "#00B27A" }}>Tavoli Prenotati</Text>

                    <ScrollView horizontal style={{ marginVertical: 20 }}>

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
                        <Pressable onPress={() => SetActive(0)} style={{ width: 180, height: 40, backgroundColor: isActive === 0 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: isActive !== 0 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                                Prenotazioni in attesa
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => SetActive(1)} style={{ width: 200, height: 40, backgroundColor: isActive === 1 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: isActive !== 1 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                                Prenotazioni accettate
                            </Text>
                        </Pressable>
                    </View>
                </View>




                <DataTable style={[{ width: "95%", backgroundColor: "white", marginVertical: 10, alignSelf: "center" }]}>
                    <DataTable.Header style={{ backgroundColor: "#00B27A" }}>
                        <DataTable.Title textStyle={{ fontSize: 12, color: "white", paddingLeft: 5 }} style={{ borderRightWidth: 1, borderRightColor: "white" }}>Nome cliente</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 12, color: "white", paddingLeft: 5 }} style={{ borderRightWidth: 1, borderRightColor: "white" }}>Nome cliente</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 12, color: "white", paddingLeft: 5 }}>Nome cliente</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row onPress={() => showModal()} style={{ height: 60, borderBottomColor: "#D9D9D9", borderBottomWidth: 1 }}>

                        <DataTable.Cell style={{ borderRightColor: "#D9D9D9", borderRightWidth: 1 }}>Michelangelo Torpedine</DataTable.Cell>
                        <DataTable.Cell style={{ borderRightColor: "#D9D9D9", borderRightWidth: 1 }}>19/05/2022</DataTable.Cell>
                        <DataTable.Cell >15:44</DataTable.Cell>

                    </DataTable.Row>

                    <DataTable.Row onPress={() => showModal()} style={{ height: 60, borderBottomColor: "#D9D9D9", borderBottomWidth: 1 }}>

                        <DataTable.Cell style={{ borderRightColor: "#D9D9D9", borderRightWidth: 1 }}>Carla Buongiorno</DataTable.Cell>
                        <DataTable.Cell style={{ borderRightColor: "#D9D9D9", borderRightWidth: 1 }}>19/05/2022</DataTable.Cell>
                        <DataTable.Cell >15:44</DataTable.Cell>

                    </DataTable.Row>

                    <DataTable.Pagination
                        page={page}
                        numberOfPages={3}
                        onPageChange={(page) => setPage(page)}
                        label="1-2 of 6"
                        optionsPerPage={optionsPerPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        showFastPagination
                        optionsLabel={'Rows per page'}
                    />
                </DataTable>
            </ScrollView>


            <UserModal visible={visible} hideModal={hideModal} />

        </Header>
    )
}

export default Reservation

