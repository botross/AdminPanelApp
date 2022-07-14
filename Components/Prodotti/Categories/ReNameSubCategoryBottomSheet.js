import { View, Text, Pressable, TextInput, ScrollView, Image } from "react-native";
import React, { useContext } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialIcons, Ionicons } from "react-native-vector-icons"
import axios from "axios"
import { MyContext } from "../../../AppContext";
import { icons } from "./ImagesImport"
import RNPickerSelect from 'react-native-picker-select';

const ReNameSubCategoryBottomSheet = ({ name, id, catalogId, SetReload, theImage }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState()
    const { userData, SuccessToast } = useContext(MyContext)
    const [TheIcon, SetIcon] = React.useState(icons[0])
    const [isMenuShowed, SetMenuShow] = React.useState(false)
    const [Availability, SetAvailability] = React.useState()
    const renameCatalog = async (id, name, catalogId) => {
        try {
            const data = {
                name: name,
                image: Image.resolveAssetSource(TheIcon.image).uri,
                availability: Availability,
                catalog: catalogId,
            };
            const url = `https://deployment.restaurants.club/categories/${id}`;
            const result = await axios.patch(url, data);
            refRBSheet.current.close()
            SetName("")


            SetReload("WEWE")
            SuccessToast()
        } catch (error) {
            console.log(error)
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
            <Pressable onPress={() => refRBSheet.current.open()} style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                <MaterialIcons name="edit" color="white" size={25} />
            </Pressable>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                animationType="slide"
                closeOnPressMask={true}
                height={670}
                customStyles={{
                    draggableIcon: {
                        backgroundColor: "#00B27A"
                        , width: "100%", height: 15, marginTop: 0, borderRadius: 0
                    },
                    container: { height: 600, borderTopRightRadius: 10, borderTopLeftRadius: 10 }
                }}
            >
                <View style={{ width: "100%", paddingHorizontal: 10, height: 570, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>


                    <Text style={{ color: "#00B27A", fontSize: 22, fontWeight: "600", alignSelf: "center" }}>Modifica Sotto Menu</Text>


                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Nome Attuale</Text>
                    <TextInput value={name} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Edit categorie name</Text>
                    <TextInput onChangeText={(text) => SetName(text)} value={CategorieName} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Scegli Icona del Sotto Menu</Text>
                    <Pressable onPress={() => SetMenuShow(true)} style={{ width: 60, height: 60, borderRadius: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F6F6" }}>

                        <Image source={{ uri: theImage }} resizeMode="contain" style={{ width: 50, height: 50 }} />

                    </Pressable>
                    <Text style={{ color: "#323232", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Quando è disponibile il Sotto Menu</Text>
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
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "row", marginBottom: 20 }} >
                        <Pressable onPress={() => renameCatalog(id, CategorieName, catalogId)} style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#00B27A" }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "#00B27A" }}>Aggiungi </Text>
                        </Pressable>


                        <Pressable onPress={() => {
                            refRBSheet.current.close()
                            SetName("")
                        }} style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A" }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "white" }}>Torna Indietro</Text>
                        </Pressable>
                    </View>
                </View>
            </RBSheet>
        </View >
    )
}

export default ReNameSubCategoryBottomSheet