import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { AntDesign } from "react-native-vector-icons"
import * as Progress from 'react-native-progress';
import { Feather, FontAwesome } from "react-native-vector-icons"
const MarketingCamps = ({ navigation }) => {
    return (
        <Header navigation={navigation} title="Marketing" icon={require("../../assets/MarketingIcon.png")}>
            <ScrollView style={{ marginBottom: 100 }} >

                <Text onPress={() => navigation.goBack()} style={{ fontSize: 20, fontWeight: "600", color: "#00B27A", marginLeft: 15 }}><AntDesign name="back" color="#00B27A" size={25} /> Back</Text>

                <Text style={{ fontWeight: "700", fontSize: 20, color: "#00B27A", paddingHorizontal: 15, marginTop: 15 }}>Suggested Goal</Text>
                <Text style={{ fontWeight: "400", fontSize: 14, color: "#aeaeae", paddingHorizontal: 20, paddingVertical: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque elit laoreet condimentum imperdiet. </Text>




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
                    backgroundColor: "white", borderRadius: 10, marginTop: 10
                }}>
                    <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 16 }}>Descrizione</Text>
                    <Text style={{ color: "#8A8A8A", fontWeight: "400", fontSize: 13, marginVertical: 10, paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque elit laoreet condimentum.</Text>
                    <Image source={require("../../assets/marketingCamp.png")} style={{ width: "100%", height: 130 }} />

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


                    <Pressable onPress={() => navigation.navigate("PersonalizeCamp")} style={{ width: "90%", height: 35, justifyContent: "center", backgroundColor: "#00B27A", alignItems: "center", marginHorizontal: 10, display: "flex", flexDirection: "row", alignSelf: "center", borderRadius: 10, marginTop: 10 }}>
                        <View style={{ width: "35%", backgroundColor: "#00B27A", height: "100%", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row" }}>
                            <FontAwesome name="money" color="white" size={25} />
                            <Text style={{ fontWeight: "500", fontSize: 16, color: "white", marginLeft: 10 }}>200$</Text>
                        </View>
                        <View style={{ width: "65%", backgroundColor: "white", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10, borderWidth: 1, borderColor: "#00B27A", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", color: "#00B27A" }}>Avvia Campagna</Text>
                        </View>
                        {/* <Text style={{ fontWeight: "500", fontSize: 16, color: "white", marginRight: 10 }}>Scopri di più</Text> */}
                    </Pressable>


                </View>
            </ScrollView>
        </Header>
    )
}

export default MarketingCamps