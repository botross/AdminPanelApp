import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { Ionicons, Entypo, Feather } from "react-native-vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"
import InProgress from './InProgress'
import Completed from './Completed'
const Marketing = ({ navigation }) => {
    const [isActive, SetActive] = React.useState(0)

    const Buttons =
        [
            {
                id: 0,
                name: "Campagne in Corso",
            },
            {
                id: 1,
                name: "Campagne completate",
            },
        ]
    return (
        <Header navigation={navigation} title="Marketing" icon={require("../../assets/MarketingIcon.png")}>
            <ScrollView style={{ marginBottom: 100 }}>

                <View style={{ paddingVertical: 6, backgroundColor: "#F8F8F8", alignSelf: "center", width: "70%", borderRadius: 10 }}>
                    <Pressable onPress={() => navigation.navigate("MarketingCamps")} style={{ width: "90%", height: 40, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#00B27A", display: "flex", flexDirection: "row", marginVertical: 10 }}>
                        <Text style={{ fontWeight: "500", fontSize: 16, color: "white", marginRight: 10 }}>Crea nuova Campagna</Text>
                        <Ionicons name="add-outline" color="white" size={25} />
                    </Pressable>
                </View>

                <View style={{ alignSelf: "center", display: "flex", flexDirection: "row", alignItems: "center" }}>

                    {Buttons.map((btn, index) => {
                        return (
                            <TouchableOpacity onPress={() => SetActive(btn.id)} key={index} style={{ paddingVertical: 15, borderBottomWidth: 2, borderBottomColor: isActive === btn.id ? "#00B27A" : "#AEAEAE", width: 180, alignItems: 'center', marginBottom: 10, alignSelf: "center" }}>
                                <Text style={{ fontSize: 12, fontWeight: "700", color: isActive === btn.id ? "#00B27A" : "#AEAEAE" }}>{btn.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Pressable style={{ width: "80%", height: 40, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#00B27A", display: "flex", flexDirection: "row", marginVertical: 15 }}>
                    <Entypo name="wallet" color="white" size={25} />
                    <Text style={{ fontWeight: "500", fontSize: 16, color: "white", marginLeft: 10 }}>Credito disponibile: 300 €</Text>
                </Pressable>


                {isActive === 0 && <InProgress />}
                {isActive === 1 && <Completed />}




            </ScrollView>

        </Header>
    )
}

export default Marketing