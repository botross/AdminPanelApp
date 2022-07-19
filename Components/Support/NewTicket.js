import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import axios from "axios"
import { MyContext } from '../../AppContext';
import { Feather } from "react-native-vector-icons"
const NewTicket = ({ hideModal, visible ,SetReload}) => {
    const { Token } = useContext(MyContext)
    const [loading, setLoading] = React.useState(false)
    const [subject, SetSubject] = React.useState()
    const [Messaggio, SetMessagio] = React.useState()
    const [Error, SetError] = React.useState()
    const containerStyle = { backgroundColor: 'white', padding: 20, zIndex: 10, width: "90%", alignSelf: "center", borderRadius: 15 };
    const data =
    {
        "subject": subject,
        "message": Messaggio
    }

    const getAuthConfig = () => ({
        headers: { authorization: `Bearer ${Token}` },
    });
    async function postNewTicket() {
        setLoading(true)
        try {
            await axios.post("https://dashboard.develop.rc.aigotsrl-dev.com/api/tickets", data, getAuthConfig(),)
            hideModal()
            SetReload("MAOSDMOASDMOASD")
        } catch (error) {
            SetError(error.data)
            console.log(error)
        }
        setLoading(false)
    }
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, zIndex: 10 }}>
                            <Feather name="x" size={30} color="black" />
                        </Pressable>
                        <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 10 }}>Crea un Ticket di richiesta</Text>
                        <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 10 }}>Oggetto</Text>
                        <TextInput value={subject} onChangeText={(text) => SetSubject(text)} style={{ width: "90%", height: 40, backgroundColor: "#F5F5F5", marginVertical: 10, alignSelf: 'center', borderRadius: 10, padding: 10 }} />
                        <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 10 }}>Messaggio</Text>
                        <TextInput value={Messaggio} onChangeText={(text) => SetMessagio(text)} style={{ width: "90%", height: 180, backgroundColor: "#F5F5F5", marginVertical: 10, alignSelf: 'center', borderRadius: 10, textAlignVertical: 'top', padding: 10 }} />
                        <Text style={{ fontWeight: "300", fontSize: 12, marginVertical: 10 }}>Cliccando su "invia" accetti le nostre condizioni di terms of service e di privacy policy</Text>
                        {Error && <Text style={{ fontWeight: "300", fontSize: 12, marginVertical: 10, color: "red" }}>{Error}</Text>}
                        {loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 10 }} />}
                        <Pressable onPress={() => postNewTicket()} style={{ width: "45%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 10 }}>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>INVIA</Text>
                        </Pressable>
                    </View>
                </Modal>
            </Portal>

        </Provider>
    )
}

export default NewTicket