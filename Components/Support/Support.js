import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { Octicons } from "react-native-vector-icons"
import { DataTable } from 'react-native-paper';

const Support = ({ navigation }) => {
    const optionsPerPage = [2, 3, 4];
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    return (
        <Header navigation={navigation} title="Support" icon={require("../../assets/SupportIcon.png")} >
            <ScrollView style={{ marginBottom: 90 }}>

                <Text style={{ color: "#00B27A", fontSize: 26, fontWeight: "700", alignSelf: "center", marginTop: 10 }}>Avete domande?</Text>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Pressable style={{ width: "40%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", alignSelf: "center", marginTop: 30, borderWidth: 1, borderColor: "#00B27A" }}>
                        <Text style={{ color: "#A1A1A1", fontSize: 12, fontWeight: "600" }}>contact@mail.com</Text>
                    </Pressable>
                    <Pressable style={{ width: "45%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 30 }}>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Chat con un assistente</Text>
                    </Pressable>
                </View>
                <Text style={{ width: "90%", color: "#AEAEAE", fontWeight: "500", fontSize: 16, alignSelf: "center", marginTop: 17, textDecorationLine: "underline", textDecorationColor: "#AEAEAE" }}>Apri un ticket</Text>
                <Text style={{ width: "80%", color: "#AEAEAE", fontWeight: "300", fontSize: 14, alignSelf: "center", marginVertical: 10 }}>Se ci stai segnalando un problema, ricorda di fornire quante più informazioni possibili.</Text>

                <View style={{ width: "95%", backgroundColor: "#F8F8F8", borderRadius: 15, alignSelf: "center", paddingVertical: 15, paddingHorizontal: 5 }}>
                    <Pressable  style={{ width: "60%", height: 50, justifyContent: "center", alignSelf: "flex-start", alignItems: "center", borderRadius: 10, backgroundColor: "white", display: "flex", flexDirection: "row", marginVertical: 10 }}>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                        <Text style={{ fontWeight: "500", fontSize: 12, color: "#00B27A", marginLeft: 10 }}>Crea un nuovo ticket</Text>
                    </Pressable>

                    <DataTable style={{ width: "95%", backgroundColor: "white", marginVertical: 20, alignSelf: "center" }}>
                        <DataTable.Header style={{ backgroundColor: "#E7E7E7" }}>
                            <DataTable.Title textStyle={{ fontSize: 12, color: "#AEAEAE", paddingLeft: 5 }} style={{ borderRightWidth: 1, borderRightColor: "white" }}>OGGETTO DELLA RICHIESTA</DataTable.Title>
                            <DataTable.Title textStyle={{ fontSize: 12, color: "#AEAEAE", paddingLeft: 5 }} style={{ borderRightWidth: 1, borderRightColor: "white" }}>STATO DELLA RICHIESTA</DataTable.Title>
                            <DataTable.Title textStyle={{ fontSize: 12, color: "#AEAEAE", paddingLeft: 5 }} >DATA DELLA RICHIESTA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row onPress={() => navigation.navigate("SingleTicket")} style={{ height: 80, borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}>
                            <DataTable.Cell >Lorem Ipsum</DataTable.Cell>
                            <DataTable.Cell textStyle={{ paddingVertical: 8, borderRadius: 20, backgroundColor: "#EEFFCA", paddingHorizontal: 20, color: "#80B116", fontSize: 12 }}>Risolto</DataTable.Cell>
                            <DataTable.Cell >17/05/2022</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row Row onPress={() => navigation.navigate("SingleTicket")}  style={{ height: 80, borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}>
                            <DataTable.Cell >Lorem Ipsum</DataTable.Cell>
                            <DataTable.Cell textStyle={{ paddingVertical: 8, borderRadius: 20, backgroundColor: "#FFEACA", paddingHorizontal: 10, color: "#FF814B", fontSize: 12 }} >In lavorazione</DataTable.Cell>
                            <DataTable.Cell >17/05/2022</DataTable.Cell>
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
                </View>
            </ScrollView>

        </Header>
    )
}

export default Support


