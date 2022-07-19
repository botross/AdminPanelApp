import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { Feather } from "react-native-vector-icons"

const InProgressCard = ({Camp}) => {

    return (
        <View style={{
            width: "95%", alignSelf: "center", shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.21,
            shadowRadius: 7.68,
            elevation: 10,
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "white", borderRadius: 10, marginVertical:15
        }}>
            <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 16 }}>{Camp.name}</Text>
            <Text style={{ color: "#8A8A8A", fontWeight: "400", fontSize: 13, marginVertical: 10, paddingHorizontal: 10 }}>{Camp.objective}</Text>
            <Image source={require("../../../assets/marketingCamp.png")} style={{ width: "100%", height: 130 }} />

            <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 16, marginTop: 10 }}>Risultati</Text>
            <View style={{ marginVertical: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 3 }}>
                    <Text style={{ color: "#D02A2A", fontWeight: "600", fontSize: 13 }}>Ad Views</Text>
                    <Text style={{ color: "#D02A2A", fontWeight: "600", fontSize: 13 }}>56%</Text>
                </View>
                <Progress.Bar progress={0.56} width={null} color="#D02A2A" unfilledColor='#C4C4C4' borderWidth={0} />
            </View>
            <View style={{ marginVertical: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 3 }}>
                    <Text style={{ color: "#5A3DCE", fontWeight: "600", fontSize: 13 }}>Click Attesi</Text>
                    <Text style={{ color: "#5A3DCE", fontWeight: "600", fontSize: 13 }}>23%</Text>
                </View>
                <Progress.Bar progress={0.23} width={null} color="#5A3DCE" unfilledColor='#C4C4C4' borderWidth={0} />
            </View>
            <View style={{ marginVertical: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 3 }}>
                    <Text style={{ color: "#F98011", fontWeight: "600", fontSize: 13 }}>Benefici a lungo termine</Text>
                    <Text style={{ color: "#F98011", fontWeight: "600", fontSize: 13 }}>63%</Text>
                </View>
                <Progress.Bar progress={0.63} width={null} color="#F98011" unfilledColor='#C4C4C4' borderWidth={0} />
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                <Pressable style={{ width: "60%", height: 35, justifyContent: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#00B27A", marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: "500", fontSize: 16, color: "white", marginRight: 10 }}>Scopri di più</Text>
                </Pressable>
                <Pressable style={{ marginHorizontal: 10 }}>
                    <Feather name="pause-circle" size={40} color="#FFA563" />
                </Pressable>
                <Pressable style={{ marginHorizontal: 10 }}>
                    <Feather name="stop-circle" size={40} color="#BE4E4E" />
                </Pressable>

            </View>
        </View>
    )
}

export default InProgressCard