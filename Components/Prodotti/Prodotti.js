import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { AntDesign, MaterialIcons } from "react-native-vector-icons"
import CreateCategoryBottomSheet from './CreateCategoryBottomSheet'
const Prodotti = ({ navigation }) => {


    return (
        <Header navigation={navigation} title="Prodotti" icon={require("../../assets/ProdottiIcon.png")} >
            <ScrollView style={{ widht: "100%" }}>
                <CreateCategoryBottomSheet />


                <ImageBackground source={require("../../assets/FolderBG.png")} style={{
                    width: 250, height: 250, shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.41,
                    shadowRadius: 7.68,
                    elevation: 10,
                    borderRadius: 10,
                    alignItems: "center", justifyContent: "center", alignSelf: "center",
                    marginVertical: 10
                }} resizeMode="contain" >
                    <Text style={{ fontSize: 30, fontWeight: "700", color: "#00B27A", marginTop: 20 }}>Hamburger</Text>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#636363", marginVertical: 15 }}>150 unità disponibili</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

                        <Pressable onPress={() => navigation.navigate("SubCategories")} style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                            <AntDesign name="arrowright" color="white" size={25} />
                        </Pressable>
                        <Pressable style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                            <MaterialIcons name="edit" color="white" size={25} />
                        </Pressable>
                        <Pressable style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#C25039", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                            <MaterialIcons name="delete" color="white" size={25} />
                        </Pressable>
                    </View>
                </ImageBackground>
                <ImageBackground source={require("../../assets/FolderBG.png")} style={{
                    width: 250, height: 250, shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.41,
                    shadowRadius: 7.68,
                    elevation: 10,
                    borderRadius: 10,
                    alignItems: "center", justifyContent: "center", alignSelf: "center",
                    marginVertical: 10
                }} resizeMode="contain" >
                    <Text style={{ fontSize: 30, fontWeight: "700", color: "#00B27A", marginTop: 20 }}>Hamburger</Text>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#636363", marginVertical: 15 }}>150 unità disponibili</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

                        <Pressable onPress={() => navigation.navigate("SubCategories")} style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                            <AntDesign name="arrowright" color="white" size={25} />
                        </Pressable>
                        <Pressable style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                            <MaterialIcons name="edit" color="white" size={25} />
                        </Pressable>
                        <Pressable style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#C25039", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                            <MaterialIcons name="delete" color="white" size={25} />
                        </Pressable>
                    </View>
                </ImageBackground>


            </ScrollView>

        </Header>
    )
}

export default Prodotti