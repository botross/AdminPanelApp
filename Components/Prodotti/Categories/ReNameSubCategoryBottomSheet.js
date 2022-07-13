import { View, Text, Pressable, TextInput } from "react-native";
import React, { useContext } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialIcons ,Ionicons} from "react-native-vector-icons"
import axios from "axios"
import { MyContext } from "../../../AppContext";
const ReNameSubCategoryBottomSheet = ({ name, id, catalogId, SetReload }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState()
    const { userData ,SuccessToast} = useContext(MyContext)
    const renameCatalog = async (id, name, catalogId) => {
        try {
            const body = { name, catalog: catalogId };
            const url = `https://${userData._id}.themes.develop.unifarco.aigotsrl-dev.com/api/categories/${id}`;
            const result = await axios.patch(url, body);
            refRBSheet.current.close()
            SetName("")


            SetReload("WEWE")
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
                        backgroundColor: "#000"
                    },
                    container: { height: 520 }
                }}
            >
                <View style={{ width: "100%", paddingHorizontal: 10, height: 500, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>


                <Text style={{ color: "#00B27A", fontSize: 22, fontWeight: "600", alignSelf: "center" }}>Modifica Sotto Menu</Text>


                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Edit categorie name</Text>
                    <TextInput  value={name} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Edit categorie name</Text>
                    <TextInput onChangeText={(text) => SetName(text)} value={CategorieName} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Scegli Icona del Sotto Menu</Text>
                    <Pressable onPress={() => openImagePickerAsync()} style={{ width: 60, height: 60, borderRadius: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F6F6"  }}>

                        <Ionicons name="fast-food-outline" color="#00B27A" size={35} />
                    </Pressable>
                    <Text style={{ color: "#323232", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Quando è disponibile il Menu</Text>
                    <Pressable style={{ width: "70%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A", marginBottom:20 }}>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>Pranzo</Text>
                    </Pressable>
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "row" , marginBottom:20}} >
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