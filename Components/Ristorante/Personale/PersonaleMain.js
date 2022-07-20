import { RefreshControl, View, Text, ScrollView, Pressable, TextInput, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { Octicons, Ionicons } from "react-native-vector-icons"
import axios from "axios"
import { MyContext } from '../../../AppContext'
import AddNewPersonale from './AddNewPersonale'
import { REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"
import uuid from 'react-native-uuid';

const PersonaleMain = () => {
    const { Token } = useContext(MyContext)
    const [isActive, SetActive] = React.useState(0)
    const config = { headers: { Authorization: `Bearer ${Token}` } };

    const [Personale, SetPerosnale] = React.useState([])
    const [Container, Setcontainer] = React.useState([])
    const [firstLoad, SetFirstLoad] = React.useState(true)
    const [Loading, SetLoading] = React.useState(false)

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        SetLoading(true);
        wait(2000).then(() => getPersonale());
    }, []);
    async function getPersonale() {
        SetLoading(true)
        try {
            const res = await axios.get(`https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/aliases`, config)
            console.log(res)
            Setcontainer(res.data)
        } catch (error) {
            console.log(error)
        }
        SetLoading(false)
    }

    React.useEffect(() => {
        const ac = new AbortController()
        getPersonale()
        return () => ac.abort()
    }, [])

    function handleFilteration(theStatus) {
        SetFirstLoad(false)
        if (theStatus === "ALL") { SetPerosnale(Container) } else {
            const res = Container.filter((item) => item.isActive == theStatus)
            SetPerosnale(res)
        }
    }
    function handleSearch(query) {
        SetFirstLoad(false)
        if (!query) {
            SetPerosnale(Container)
        } else {
            const res = Personale.filter((item) => item.name.toLowerCase().startsWith(query.toLowerCase()))
            SetPerosnale(res)
        }
    }
    return (
        <>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={Loading}
                        tintColor="#00B27A"
                        colors={["#00B27A"]}
                        onRefresh={onRefresh}
                    />
                }
                style={{ marginBottom: 100 }}>

                <View style={{ maxWidth: "90%", display: "flex", flexDirection: "row", backgroundColor: "#FAFAFA", alignSelf: "center", justifyContent: "space-evenly", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                    <Pressable onPress={() => {
                        SetActive(0)
                        handleFilteration("ALL")
                    }} style={{ width: "33.3%", height: 45, justifyContent: "center", alignItems: "center", backgroundColor: isActive === 0 ? "#EFEEEE" : "#FAFAFA", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: "600", color: isActive === 0 ? "#00B27A" : "#AEAEAE" }}>
                            Tutti
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        SetActive(1)
                        handleFilteration(true)
                    }}
                        style={{ width: "33.3%", height: 45, justifyContent: "center", alignItems: "center", backgroundColor: isActive === 1 ? "#EFEEEE" : "#FAFAFA", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: "600", color: isActive === 1 ? "#00B27A" : "#AEAEAE" }}>
                            Attivi
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        SetActive(2)
                        handleFilteration(false)
                    }} style={{ width: "33.3%", height: 45, justifyContent: "center", alignItems: "center", backgroundColor: isActive === 2 ? "#EFEEEE" : "#FAFAFA", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: "600", color: isActive === 2 ? "#00B27A" : "#AEAEAE" }}>
                            Disattivi
                        </Text>
                    </Pressable>
                </View>
                <View style={{ width: "90%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", backgroundColor: "#EFEEEE", paddingVertical: 0, alignSelf: "center" , borderBottomRightRadius:15 , borderBottomLeftRadius:15 }}>
                    <View style={{ width: "100%", marginBottom: 90, marginTop: 10 }}>
                        <Pressable onPress={() => showModal()} style={{ width: "70%", height: 40, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#00B27A", display: "flex", flexDirection: "row", marginVertical: 30 }}>
                            <Octicons name="diff-added" color="white" size={20} />
                            <Text style={{ fontWeight: "500", fontSize: 14, color: "white", marginLeft: 10 }}>Aggiungi nuovo utente</Text>
                        </Pressable>
                        <View style={{ width: "70%", display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", position: "relative" }}>
                            <TextInput onChangeText={(text) => handleSearch(text)} style={{ height: 40, width: "100%", backgroundColor: "#F6F6F6", borderRadius: 15, padding: 10, alignSelf: "center" }} placeholder="Cerca tramite nome utente " />
                            <Ionicons name="search-outline" size={20} color="#3BBA8B" style={{ position: "absolute", right: 10 }} />
                        </View>
                    </View>
                    {/* {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, }} />} */}
                    
                    {!Loading && (firstLoad ? Container : Personale)?.map((item) => {
                        const { isActive, name, lastname } = item
                        return (


                            <View key={uuid.v4()} style={{ width: "40%", height: 160, backgroundColor: isActive ? "#2B65BB" : "#C25039", position: "relative", borderRadius: 10, marginBottom: 70, marginTop: 10 }}>
                                <View style={{ backgroundColor: "white", borderWidth: 2, borderColor: "#C25039", borderRadius: 120, width: 80, height: 80, backgroundColor: "white", position: "relative", marginTop: "-25%", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 28, fontWeight: "700", color: "#C25039" }}>GT</Text>
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>{name}</Text>
                                <Text style={{ fontSize: 14, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>{lastname}</Text>
                                <Text style={{ fontSize: 12, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>#1</Text>
                                <Text style={{ fontSize: 10, fontWeight: "400", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>Ammistratore</Text>
                            </View>

                        )
                    })}


                    {/* <View style={{ width: "48%", height: 200, backgroundColor: "#2B65BB", position: "relative", borderRadius: 10 }}>
                    <View style={{ backgroundColor: "white", borderWidth: 2, borderColor: "#2B65BB", borderRadius: 120, width: 120, height: 120, backgroundColor: "white", position: "relative", marginTop: "-25%", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 28, fontWeight: "700", color: "#2B65BB" }}>FM</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>FEDERICO MASTROGIA COMO</Text>
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>#1</Text>
                    <Text style={{ fontSize: 12, fontWeight: "400", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>Vendite</Text>
                </View> */}

                </View>

            </ScrollView>
            <AddNewPersonale visible={visible} hideModal={hideModal} />

        </>

    )
}

export default PersonaleMain