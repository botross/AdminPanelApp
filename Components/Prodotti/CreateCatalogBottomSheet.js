import React, { useContext } from "react";
import { MyContext } from "../../AppContext";
import { View, Text, Pressable, TextInput } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Ionicons, Octicons } from "react-native-vector-icons"
import * as ImagePicker from 'expo-image-picker';
import axios from "axios"
import { REACT_APP_THEMES_PREFIX, REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_THEMES_API_PATH } from "@env"

const CreateCategoryBottomSheet = ({ SetReload ,SuccessToast }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState()
    const [image, SetImage] = React.useState()
    const { userData } = useContext(MyContext)
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


    const createCatalog = async (name, image) => {
        try {
            let str = image.replace('///', '//')
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", str);
            const url = `https://${userData._id}.${REACT_APP_THEMES_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_THEMES_API_PATH}/catalogs`;
            const result = await axios.post(url, formData);

            if (!result.data || result.data?.Error || result.data?.error)
                throw new Error(result.data?.Error || result.data?.error);

            refRBSheet.current.close()
            SetName("")


            SetReload("WEWE")
            SuccessToast("Created successfully")
        } catch (error) {
            console.log(error.message)
        }
    };
    return (
        <View>
            <Pressable onPress={() => refRBSheet.current.open()} style={{ width: "90%", height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginVertical: 10 }}>
                <Octicons name="diff-added" color="#00B27A" size={25} />
                <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginLeft: 10 }}>Aggiungi Menu</Text>
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
                        ,width:"100%", height:15, marginTop:0, borderRadius:0
                    },
                    container: { height: 600, borderTopRightRadius:10 , borderTopLeftRadius:10}
                }}
            >
                <View style={{ width: "100%", padding: 10, height: 550, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>

                    <Text style={{ color: "#00B27A", fontSize: 22, fontWeight: "600", alignSelf: "center" }}>Aggiungi un nuovo Menu</Text>
                    {/* <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Scegli Icona del Sotto Menu</Text> */}
                    {/* <Pressable onPress={() => openImagePickerAsync()} style={{ width: 60, height: 60, borderRadius: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F6F6" }}>

                        <Ionicons name="fast-food-outline" color="#00B27A" size={35} />
                    </Pressable> */}
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Quando è disponibile il Menu</Text>
                    <Pressable style={{ width: "70%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A" }}>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>Pranzo</Text>
                    </Pressable>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Inserisci il Nome del Sotto Menu</Text>
                    <TextInput onChangeText={(text) => SetName(text)} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "column" }} >
                        <Pressable onPress={() => createCatalog(CategorieName, image)} style={{ width: "50%", height: 45, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#00B27A", marginBottom:20 }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "#00B27A" }}>Crea Sotto Menu</Text>
                        </Pressable>
                        <Pressable onPress={() => refRBSheet.current.close()} style={{ width: "50%", height: 45, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A" }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "white" }}>Torna Indietro</Text>
                        </Pressable>
                    </View>
                </View>
            </RBSheet>
        </View >

    )
}

export default CreateCategoryBottomSheet