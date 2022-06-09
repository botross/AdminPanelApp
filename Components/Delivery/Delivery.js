import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { DataTable } from 'react-native-paper';
import { Octicons } from "react-native-vector-icons"
import UserModal from '../Reservation/UserModal';

const Delivery = ({ navigation }) => {
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
        <Header navigation={navigation} title="Delivery" icon={require("../../assets/DeliveryIcon.png")} >



            <ScrollView style={{ width: "95%", alignSelf: "center" }}>

                <ScrollView horizontal style={{ marginVertical: 30 }}>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginLeft: 10 }}>Seleziona categorie</Text>
                    </Pressable>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginLeft: 10 }}>Nuovo sconto</Text>
                    </Pressable>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginLeft: 10 }}>Nuovo sconto</Text>
                    </Pressable>
                </ScrollView>

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




                <DataTable style={[styles.shadow, { width: "95%", backgroundColor: "white", marginVertical: 10, borderRadius: 15, alignSelf: "center" }]}>
                    <DataTable.Header style={{ backgroundColor: "#00B27A" }}>
                        <DataTable.Title style={{ minWidth: 30 }} textStyle={[styles.textStyle, { fontSize: 10 }]} >Nome cliente</DataTable.Title>
                        <DataTable.Title textStyle={[styles.textStyle, { fontSize: 10 }]}  >Prezzo Totale</DataTable.Title>
                        <DataTable.Title textStyle={[styles.textStyle, { fontSize: 10 }]}  >Orario</DataTable.Title>
                        <DataTable.Title style={{ minWidth: 1 }} textStyle={[styles.textStyle, { fontSize: 10 }]}  >Azioni</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row onPress={() => showModal()}  style={{ height: 80, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                        <DataTable.Cell style={{ minWidth: 40 }}  >
                            <View style={{ alignItems: "center" }}>
                                <Text>

                                    Michelangelo Torpedine
                                </Text>
                            </View>
                        </DataTable.Cell>
                        <DataTable.Cell >€ 54,39</DataTable.Cell>
                        <DataTable.Cell >15:44</DataTable.Cell>
                        <DataTable.Cell >
                            <Pressable style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                                <Text style={{ color: "white" }}>Vedi</Text>
                            </Pressable>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row onPress={() => showModal()}  style={{ height: 80, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                        <DataTable.Cell style={{ minWidth: 40 }}>
                            <View style={{ alignItems: "center" }}>
                                <Text>

                                    Michelangelo Torpedine
                                </Text>
                            </View>
                        </DataTable.Cell>
                        <DataTable.Cell >€ 54,39</DataTable.Cell>
                        <DataTable.Cell >15:44</DataTable.Cell>
                        <DataTable.Cell >
                            <Pressable style={{ width: 70, height: 30, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                                <Text style={{ color: "white" }}>Vedi</Text>
                            </Pressable>
                        </DataTable.Cell>
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

export default Delivery


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
    },
    textStyle: {
        color: "white"
    },

})