import { View, Text, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Octicons, Ionicons } from "react-native-vector-icons"
const PersonaleMain = () => {
    const [isActive, SetActive] = React.useState(0)
    return (
        <ScrollView>

            <View style={{ maxWidth: "95%", display: "flex", flexDirection: "row", backgroundColor: "#FAFAFA", alignSelf: "center", justifyContent: "space-evenly", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                <Pressable onPress={() => SetActive(0)} style={{ width: "33.3%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: isActive === 0 ? "#EFEEEE" : "#FAFAFA", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: isActive === 0 ? "#00B27A" : "#AEAEAE" }}>
                        Attivi
                    </Text>
                </Pressable>
                <Pressable onPress={() => SetActive(1)} style={{ width: "33.3%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: isActive === 1 ? "#EFEEEE" : "#FAFAFA", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: isActive === 1 ? "#00B27A" : "#AEAEAE" }}>
                        Disattivi
                    </Text>
                </Pressable>
                <Pressable onPress={() => SetActive(2)} style={{ width: "33.3%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: isActive === 2 ? "#EFEEEE" : "#FAFAFA", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: isActive === 2 ? "#00B27A" : "#AEAEAE" }}>
                        Tutti
                    </Text>
                </Pressable>
            </View>
            <View style={{ width: "95%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", backgroundColor: "#EFEEEE", paddingVertical: 0, alignSelf: "center" }}>

                <View style={{width:"100%" , marginBottom: 90 , marginTop:10}}>
                    <Pressable style={{ width: "80%", height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#00B27A", display: "flex", flexDirection: "row" , marginVertical:30}}>
                        <Octicons name="diff-added" color="white" size={25} />
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "white", marginLeft: 10 }}>Aggiungi nuovo utente</Text>
                    </Pressable>
                    <View style={{ width: "80%", display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", position: "relative"}}>
                        <TextInput style={{ height: 50, width: "100%", backgroundColor: "#F6F6F6", borderRadius: 15, padding: 10, alignSelf: "center" }} placeholder="Cerca tramite nome utente " />
                        <Ionicons name="search-outline" size={30} color="#3BBA8B" style={{ position: "absolute", right: 10 }} />
                    </View>
                </View>

                <View style={{ width: "48%", height: 200, backgroundColor: "#C25039", position: "relative", borderRadius: 10 }}>
                    <View style={{ backgroundColor: "white", borderWidth: 2, borderColor: "#C25039", borderRadius: 120, width: 120, height: 120, backgroundColor: "white", position: "relative", marginTop: "-25%", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 28, fontWeight: "700", color: "#C25039" }}>GT</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>GISELLA TROPPOBELLA</Text>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>#1</Text>
                    <Text style={{ fontSize: 14, fontWeight: "400", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>Ammistratore</Text>
                </View>

                <View style={{ width: "48%", height: 200, backgroundColor: "#2B65BB", position: "relative", borderRadius: 10 }}>
                    <View style={{ backgroundColor: "white", borderWidth: 2, borderColor: "#2B65BB", borderRadius: 120, width: 120, height: 120, backgroundColor: "white", position: "relative", marginTop: "-25%", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 28, fontWeight: "700", color: "#2B65BB" }}>FM</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>FEDERICO MASTROGIA COMO</Text>
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>#1</Text>
                    <Text style={{ fontSize: 12, fontWeight: "400", color: "white", alignSelf: "center", textAlign: "center", paddingVertical: 4 }}>Vendite</Text>
                </View>

            </View>

        </ScrollView>
    )
}

export default PersonaleMain