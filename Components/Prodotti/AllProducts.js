import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import { Ionicons, Octicons, MaterialCommunityIcons } from "react-native-vector-icons"
import React from 'react'

import Header from '../../Reuseable/Header'

const AllProducts = ({ navigation }) => {
    return (
        <Header navigation={navigation} title="Products" icon={require("../../assets/ProdottiIcon.png")} >
            <ScrollView>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                        <Ionicons name="arrow-back-circle" color="#00B27A" size={50} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("CreateProduct")} style={{ width: "70%", height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginVertical: 10 }}>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                        <Text style={{ fontWeight: "500", fontSize: 12, color: "#00B27A", marginLeft: 10 }}>Crea un nuovo elemento in questa sezione</Text>
                    </Pressable>
                </View>

                <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, alignSelf: "center", marginVertical: 15 }}>Prodotti</Text>
                <View style={{ backgroundColor: "#F8F8F8", borderRadius: 15, width: "90%", alignSelf: "center", paddingVertical: 30, paddingHorizontal: 25, position: "relative" }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", marginBottom: 15 }}>
                        <Image source={require("../../assets/pizza.png")} style={{ width: 120, height: 120, marginRight: 20 }} resizeMode="contain" />
                        <View>
                            <Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 12, marginBottom: 6 }}>PIZZA ROSSA</Text>
                            <Text style={{ color: "#FFA563", fontWeight: "700", fontSize: 18, marginBottom: 6 }}>Pizza Italica</Text>
                            <Text style={{ color: "#00B27A", fontWeight: "700", fontSize: 20, marginBottom: 6 }}>€ 7,20</Text>
                            <Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14, marginBottom: 6 }}>GTIN: 3234567890126</Text>

                        </View>
                    </View>
                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginBottom: 5 }}>Ingredienti:<Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14 }}> pomodoro, mozzarella, prosciutto crudo, scaglie di grana, rucola e peperoncino</Text></Text>
                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>Allergeni:<Text> lattosio</Text></Text>
                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>Formato:<Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14 }}> Piccola</Text></Text>

                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcons name="fire" color="#C25039" size={35} />
                        <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14 }}>Piccante</Text>
                    </View>

                    <View style={{ display: "flex", flexDirection: "row", position: "absolute", top: 0, right: 0, margin: 15, alignItems: "center" }}>

                        <Pressable onPress={() => navigation.navigate("EditProduct")} style={{ marginRight: 6 }}>
                            <MaterialCommunityIcons name="square-edit-outline" color="#00B27a" size={25} />
                        </Pressable>

                        <Pressable>
                            <MaterialCommunityIcons name="delete" color="#BE4E4E" size={25} />
                        </Pressable>

                    </View>
                </View>
            </ScrollView>

        </Header>
    )
}

export default AllProducts