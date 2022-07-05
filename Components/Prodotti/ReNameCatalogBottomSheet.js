import { View, Text, Pressable, TextInput } from "react-native";
import React, { useContext } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialIcons } from "react-native-vector-icons"
import axios from "axios"
import { MyContext } from "../../AppContext";
const ReNameSubCategoryBottomSheet = ({ name, id, SetReload }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState(name)
    const { userData } = useContext(MyContext)
    const renameCatalog = async (id, name) => {
        try {
            const body = { name };
            const url = `https://${userData._id}.themes.develop.unifarco.aigotsrl-dev.com/api/catalogs/${id}`;
            const result = await axios.patch(url, body);
            refRBSheet.current.close()
            SetName("")


            SetReload("WEWE")

        } catch (error) {
            console.log(error.response)
        }
    };

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
                    container: { height: 270 }
                }}
            >
                <View style={{ width: "100%", padding: 10, height: 250, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>




                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Edit catalog name</Text>
                    <TextInput onChangeText={(text) => SetName(text)} value={CategorieName} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "row" }} >
                        <Pressable onPress={() => renameCatalog(id, CategorieName)} style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#00B27A" }}>
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