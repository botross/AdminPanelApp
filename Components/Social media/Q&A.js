import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const QA = () => {
    return (
        <View>


            <View style={{ display: "flex", flexDirection: "row", width: "90%", alignSelf: "center", alignItems:"center", backgroundColor: "#F8F8F8", borderRadius: 8, paddingVertical: 20, paddingHorizontal: 2 }}>
                <Image source={require("../../assets/Person2.jpg")} style={{ width: 70, height: 70, borderRadius: 100, marginRight: 10 }} />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: "#00B27A", marginBottom: 3 }}>Giulia Rossi</Text>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: "black", marginBottom: 3 }}>Siete aperti adesso?</Text>
                    <Text style={{ fontSize: 12, fontWeight: "300", color: "black", marginBottom: 3 }}>Tutti i voti: 0  Total Answers: 1</Text>
                    <Text style={{ fontSize: 12, fontWeight: "300", color: "black", marginBottom: 3 }}>Created: 25/03/2022 17:59:56</Text>
                    <Text style={{ fontSize: 12, fontWeight: "300", color: "black", marginBottom: 3 }}>Update: 25/03/2022 17:59:56</Text>
                </View>
                <Pressable style={{ width: 60, height: 30, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginLeft:10}}>
                    <Text style={{ fontWeight: "600", fontSize: 12, color: "white" }}>
                    Guarda
                    </Text>
                </Pressable>
            </View>

            
        </View>
    )
}

export default QA