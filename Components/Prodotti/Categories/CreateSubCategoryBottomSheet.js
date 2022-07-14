import React, { useContext } from "react";
import { View, Text, Pressable, TextInput, Image, ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Octicons, Ionicons } from "react-native-vector-icons"
import axios from "axios"
import { MyContext } from "../../../AppContext";
import { Menu } from 'react-native-paper';
import { icons } from "./ImagesImport"
import RNPickerSelect from 'react-native-picker-select';

const CreateSubCategoryBottomSheet = ({ catalogId, SetReload }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState()
    const { SuccessToast } = useContext(MyContext)
    const [TheIcon, SetIcon] = React.useState(icons[0])
    const [isMenuShowed, SetMenuShow] = React.useState(false)
    const [Availability, SetAvailability] = React.useState()
    const mslan = Image.resolveAssetSource(TheIcon.image)
    console.log(mslan, "HNA")
    const createCategory = async (name, catalogId) => {
        try {
            const data = {
                name: name,
                image: Image.resolveAssetSource(TheIcon.image).uri,
                availability: Availability,
                catalog: catalogId,
            };

            const url = `https://deployment.restaurants.club/categories`;
            const result = await axios.post(url, data);
            if (!result.data || result.data?.Error || result.data?.error)
                throw new Error(result.data?.Error || result.data?.error);
            refRBSheet.current.close()
            SetName("")
            SetReload("WEWEWE")
            SuccessToast()
        } catch (error) {
            console.log(error.response)
        }
    };

    const selectBoxStyle = {
        inputIOS: {
            color: "white",
            fontWeight: "600", fontSize: 18,
            paddingHorizontal: 10
        },
        iconContainer: {},
        placeholder: {
            color: 'white',
            fontSize: 14
        },
        inputAndroid: {
            color: "white",
            fontWeight: "600", fontSize: 18,
            paddingHorizontal: 10
        }
    }
    return (
        <View>
            <Pressable onPress={() => refRBSheet.current.open()} style={{ width: "100%", height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginVertical: 10 }}>
                <Octicons name="diff-added" color="#00B27A" size={25} />
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#00B27A", marginLeft: 10 }}>Aggiungi un Nuovo Sotto Menu</Text>
            </Pressable>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                animationType="slide"
                closeOnPressMask={true}
                height={670}
                customStyles={{
                    // wrapper: {
                    //     backgroundColor: "#7d7d7dBF"
                    // },
                    draggableIcon: {
                        backgroundColor: "#00B27A"
                        , width: "100%", height: 15, marginTop: 0, borderRadius: 0
                    },
                    container: { height: 550, borderTopRightRadius: 10, borderTopLeftRadius: 10 }
                }}
            >
                <View style={{ width: "100%", paddingHorizontal: 10, height: 500, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

                    <Text style={{ color: "#00B27A", fontSize: 22, fontWeight: "600", alignSelf: "center" }}>Aggiungi un nuovo Menu</Text>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Scegli Icona del Sotto Menu</Text>
                    <Pressable onPress={() => SetMenuShow(true)} style={{ width: 60, height: 60, borderRadius: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F6F6" }}>

                        <Image source={TheIcon.image} resizeMode="contain" style={{ width: 50, height: 50 }} />

                    </Pressable>
                    <Text style={{ color: "#323232", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Quando è disponibile il Menu</Text>
                    <Pressable style={{ width: "70%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A", color: "white" }}>
                        <RNPickerSelect
                            onValueChange={(value) => SetAvailability(value)}
                            style={selectBoxStyle}
                            items={[
                                { label: 'Tutto il giorno', value: 'TUTTO IL GIORNO' },
                                { label: 'Pranzo', value: 'PRANZO' },
                                { label: 'Cena', value: 'CENA' },
                            ]}
                        />
                    </Pressable>

                    {isMenuShowed &&
                        <ScrollView style={{
                            flex: 1, position: "absolute", backgroundColor: "white", width: "50%", maxHeight: 300, shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.41,
                            shadowRadius: 7.68,
                            elevation: 10, zIndex: 10, alignSelf: "center", marginTop: "25%"
                        }}>
                            {icons.map((item) => {


                                return (
                                    <>
                                        <Pressable onPress={() => {
                                            SetIcon(item)
                                            SetMenuShow(false)
                                        }} style={{ width: "95%", height: 80, borderWidth: 1, borderColor: "black", alignItems: 'center', justifyContent: "center", alignSelf: "center", marginVertical: 4, zIndex: 10 }} >

                                            <Image source={item.image} resizeMode="contain" style={{ width: 70, height: 70 }} />
                                        </Pressable>

                                    </>
                                )
                            })}

                        </ScrollView>}
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Inserisci il Nome del Menu</Text>
                    <TextInput onChangeText={(text) => SetName(text)} value={CategorieName} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10, marginBottom: 20 }} />
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "row", paddingBottom: 10 }} >
                        <Pressable onPress={() => createCategory(CategorieName, catalogId)} style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#00B27A" }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "#00B27A" }}>Aggiungi </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                refRBSheet.current.close()
                                SetName("")
                            }}
                            style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A" }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "white" }}>Torna Indietro</Text>
                        </Pressable>
                    </View>
                </View>
            </RBSheet>
        </View >
    )
}

export default CreateSubCategoryBottomSheet