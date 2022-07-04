import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Octicons } from "react-native-vector-icons"
import axios from "axios"
const CreateSubCategoryBottomSheet = ({ catalogId, SetReload }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState()


    const createCategory = async (name, catalogId) => {
        try {
            const body = { name, catalog: catalogId };
            const url = `https://62a3117a11c1cb7d854a0367.themes.develop.unifarco.aigotsrl-dev.com/api/categories`;
            const result = await axios.post(url, body);
            if (!result.data || result.data?.Error || result.data?.error)
                throw new Error(result.data?.Error || result.data?.error);
            refRBSheet.current.close()
            SetName("")
            SetReload("WEWEWE")
        } catch (error) {
            console.log(error.response)
        }
    };
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
                    container: { height: 350 }
                }}
            >
                <View style={{ width: "100%", padding: 10, height: 300, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

                    <Text style={{ color: "#00B27A", fontSize: 22, fontWeight: "600", alignSelf: "center" }}>Aggiungi un nuovo Menu</Text>


                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Inserisci il Nome del Menu</Text>
                    <TextInput onChangeText={(text) => SetName(text)} value={CategorieName} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "row" }} >
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