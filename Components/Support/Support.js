import { View, Text, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../Reuseable/Header'
import { Octicons } from "react-native-vector-icons"
import { DataTable } from 'react-native-paper';
import { MyContext } from '../../AppContext';
import axios from "axios"
import NewTicket from './NewTicket';
import uuid from "react-native-uuid"
const Support = ({ navigation }) => {
    const { Token } = useContext(MyContext)
    const optionsPerPage = [2, 3, 4];
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [AllTickets, SetAllTickets] = React.useState(null)
    const [loading, Setloading] = React.useState(false)


    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    async function getAllTickets() {
        Setloading(true)
        try {
            const config = { headers: { authorization: `Bearer ${Token}` } };
            const res = await axios.get("https://dashboard.develop.rc.aigotsrl-dev.com/api/tickets", config)
            console.log(res.data)
            SetAllTickets(res.data)
        } catch (error) {
            console.log(error.response)
            SetAllTickets(null)
        }
        Setloading(false)
    }

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    React.useEffect(() => { getAllTickets() }, [])
    return (
        <>
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
                        <Pressable onPress={showModal} style={{ width: "60%", height: 50, justifyContent: "center", alignSelf: "flex-start", alignItems: "center", borderRadius: 10, backgroundColor: "white", display: "flex", flexDirection: "row", marginVertical: 10 }}>
                            <Octicons name="diff-added" color="#00B27A" size={25} />
                            <Text style={{ fontWeight: "500", fontSize: 12, color: "#00B27A", marginLeft: 10 }}>Crea un nuovo ticket</Text>
                        </Pressable>

                        <DataTable style={{ width: "95%", backgroundColor: "white", marginVertical: 20, alignSelf: "center" }}>
                            <DataTable.Header style={{ backgroundColor: "#E7E7E7" }}>
                                <DataTable.Title textStyle={{ fontSize: 12, color: "#AEAEAE", paddingLeft: 5 }} style={{ borderRightWidth: 1, borderRightColor: "white" }}>OGGETTO DELLA RICHIESTA</DataTable.Title>
                                <DataTable.Title textStyle={{ fontSize: 12, color: "#AEAEAE", paddingLeft: 5 }} style={{ borderRightWidth: 1, borderRightColor: "white" }}>STATO DELLA RICHIESTA</DataTable.Title>
                                <DataTable.Title textStyle={{ fontSize: 12, color: "#AEAEAE", paddingLeft: 5 }} >DATA DELLA RICHIESTA</DataTable.Title>
                            </DataTable.Header>
                            {!loading &&
                                AllTickets?.length > 0 &&
                                AllTickets?.map((item) => {
                                    const CreatedAT = new Date(item.createdAt).toLocaleString()

                                    return (
                                        <DataTable.Row key={uuid.v4()} onPress={() => navigation.navigate("SingleTicket", { ticket: item })} style={{ height: 80, borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}>
                                            <DataTable.Cell >{item.subject}</DataTable.Cell>
                                            <DataTable.Cell textStyle={{ paddingVertical: 8, borderRadius: 20, backgroundColor: item.resolved ? "#EEFFCA" : "#FFEACA", paddingHorizontal: 10, color: item.resolved ? "#80B116" : "#FF814B", fontSize: 12 }}>{item.resolved ? "Risolto" : "In lavorazione"}</DataTable.Cell>
                                            <DataTable.Cell >{CreatedAT}</DataTable.Cell>
                                        </DataTable.Row>
                                    )
                                })}

                            {loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 10 }} />}
                            {!loading && AllTickets && AllTickets?.length === 0 && <Text style={{ marginVertical: 10, fontWeight: "600", fontSize: 18, textAlign: "center" }} >you have no tickets</Text>}
                            {!loading && !AllTickets && < Text style={{ marginVertical: 10, fontWeight: "600", fontSize: 18, textAlign: "center" }} >Error while fetching your tickets</Text>}

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

            </Header >
            <NewTicket hideModal={hideModal} visible={visible} />
        </>

    )
}

export default Support


