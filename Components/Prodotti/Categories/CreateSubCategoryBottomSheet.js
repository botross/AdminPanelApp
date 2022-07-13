import React, { useContext } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Octicons, Ionicons } from "react-native-vector-icons"
import axios from "axios"
import { MyContext } from "../../../AppContext";
const CreateSubCategoryBottomSheet = ({ catalogId, SetReload }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState()
    const { userData, SuccessToast } = useContext(MyContext)
    const createCategory = async (name, catalogId) => {
        try {
            const body = { name, catalog: catalogId };
            const url = `https://${userData._id}.themes.develop.unifarco.aigotsrl-dev.com/api/categories`;
            const result = await axios.post(url, body);
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
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        SetImage(pickerResult.uri)
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
                        backgroundColor: "#000"
                    },
                    container: { height: 550 }
                }}
            >
                <View style={{ width: "100%", paddingHorizontal: 10, height: 500, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

                    <Text style={{ color: "#00B27A", fontSize: 22, fontWeight: "600", alignSelf: "center" }}>Aggiungi un nuovo Menu</Text>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Scegli Icona del Sotto Menu</Text>
                    <Pressable onPress={() => openImagePickerAsync()} style={{ width: 60, height: 60, borderRadius: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F6F6" }}>

                        <Ionicons name="fast-food-outline" color="#00B27A" size={35} />
                    </Pressable>
                    <Text style={{ color: "#323232", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Quando è disponibile il Menu</Text>
                    <Pressable style={{ width: "70%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A" }}>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>Pranzo</Text>
                    </Pressable>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Inserisci il Nome del Menu</Text>
                    <TextInput onChangeText={(text) => SetName(text)} value={CategorieName} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 , marginBottom:20 }} />
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