import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign } from "react-native-vector-icons"
const SingleTicket = ({ route, navigation }) => {
    const { ticket } = route.params

    const { subject, createdAt, conversation, createdBy } = ticket;
    const CreatedAT = new Date(createdAt).toLocaleString()
    return (
        <Header navigation={navigation} title="Support" icon={require("../../assets/SupportIcon.png")} >
            <ScrollView style={{ marginBottom: 100 }}>
                <Text onPress={() => navigation.goBack()} style={{ fontSize: 20, fontWeight: "600", color: "#00B27A", marginLeft: 15 }}><AntDesign name="back" color="#00B27A" size={25} /> Back</Text>
                <View style={{
                    width: "95%", marginVertical: 20, shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.21,
                    shadowRadius: 7.68,
                    elevation: 10,
                    borderRadius: 10, alignSelf: "center"
                }}>

                    <View style={{ height: 70, width: "95%", alignSelf: "center", justifyContent: "center", paddingHorizontal: 20, backgroundColor: "white" }}>
                        <Text style={{ color: "#AEAEAE", fontWeight: "600", fontSize: 16, textDecorationLine: "underline", textDecorationColor: "#AEAEAE", marginBottom: 2 }}>Informazioni della richiesta</Text>
                        <Text style={{ color: "#AEAEAE", fontWeight: "300", fontSize: 13, }}>Dati Personali e Richiesta</Text>
                    </View>
                    <View style={{ height: 60, width: "95%", alignSelf: "center", alignItems: "center", paddingHorizontal: 20, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row" }}>
                        <Text style={{ color: "#AEAEAE", fontSize: 16, fontWeight: "600" }}>Oggetto:</Text>
                        <Text style={{ fontWeight: "600", fontSize: 16, color: "black", marginLeft: 25 }}>{subject}</Text>
                    </View>
                    <View style={{ height: 60, width: "95%", alignSelf: "center", alignItems: "center", paddingHorizontal: 20, backgroundColor: "white", display: "flex", flexDirection: "row" }}>
                        <Text style={{ color: "#AEAEAE", fontSize: 16, fontWeight: "600" }}>Data: </Text>
                        <Text style={{ fontWeight: "600", fontSize: 16, color: "black", marginLeft: 25 }}>{CreatedAT}</Text>
                    </View>
                    <View style={{ width: "95%", alignSelf: "center", justifyContent: "center", paddingHorizontal: 20, backgroundColor: "#F6F6F6", paddingVertical: 30 }}>

                        {!conversation || conversation.length < 1 && <Text style={{ color: "#AEAEAE", fontSize: 16, fontWeight: "600" }}>This ticket has no messages yet Start by sending one</Text>}

                        {conversation && conversation?.map((message) => (
                            <View>
                                <Text style={{ color: "#AEAEAE", fontSize: 16, fontWeight: "600" }}>Contenuto ticket:</Text>

                                {message?.createdBy === createdBy ? <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                                    <View style={{ width: 45, height: 45, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 24, fontWeight: "600", color: "white" }}>A</Text>
                                    </View>
                                    <View style={{ width: "80%", backgroundColor: "white", height: 55, borderRadius: 10, paddingHorizontal: 15, justifyContent: "center" }}>
                                        <Text style={{ fontWeight: "400", fontSize: 14, color: "#AEAEAE" }}>Buonasera</Text>
                                    </View>
                                </View>
                                    :
                                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                                        <View style={{ width: "80%", backgroundColor: "white", height: 55, borderRadius: 10, paddingHorizontal: 15, justifyContent: "center" }}>
                                            <Text style={{ fontWeight: "400", fontSize: 14, color: "#AEAEAE" }}>{message?.payload}</Text>
                                        </View>
                                        <View style={{ width: 45, height: 45, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ fontSize: 24, fontWeight: "600", color: "white" }}>B</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                        ))}


                        <Text style={{ color: "#AEAEAE", fontSize: 16, fontWeight: "600", marginVertical: 15 }}>Contenuto ticket:</Text>
                        <TextInput style={{ width: "100%", backgroundColor: "white", borderRadius: 10, height: 120, textAlignVertical: "top", padding: 15 }} placeholderTextColor="#AEAEAE" placeholder="Scrivi qui..." multiline={true} />
                        <Pressable style={{ width: "45%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 30 }}>
                            <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                                Send
                            </Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
        </Header>
    )
}

export default SingleTicket