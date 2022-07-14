import { View, Text, Pressable, TextInput, ActivityIndicator } from "react-native";
import React, { useContext } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialIcons } from "react-native-vector-icons"
import axios from "axios"
import { REACT_APP_THEMES_PREFIX, REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"
import RNPickerSelect from 'react-native-picker-select';

import { MyContext } from "../../AppContext";
const ReNameSubCategoryBottomSheet = ({ name, id, SetReload }) => {
    const refRBSheet = React.useRef();
    const [CategorieName, SetName] = React.useState()
    const [Availability, SetAvailability] = React.useState()
    const [Loading, SetLoading] = React.useState(false)

    const { SuccessToast, FailedToast } = useContext(MyContext)

    const renameCatalog = async (id) => {
        if (!CategorieName || !Availability) {
            FailedToast("Please fill all the Fields")
        } else {
            SetLoading(true)
            const menuData = { name: CategorieName, availability: Availability };
            try {
                const url = `https://deployment.restaurants.club/catalogs/${id}`;
                const result = await axios.patch(url, menuData);
                refRBSheet.current.close()
                SetName("")
                SetReload("WEWE")
                SuccessToast()
            } catch (error) {
                console.log(error.response)
            }
            SetLoading(false)
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
                    container: { height: 500, borderTopRightRadius: 10, borderTopLeftRadius: 10 }
                }}
            >
                <View style={{ width: "100%", padding: 10, height: 480, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>



                    <Text style={{ color: "#323232", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Nome Attuale</Text>
                    <TextInput value={name} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#323232", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Inserisci il Nome del Menu</Text>
                    <TextInput onChangeText={(text) => SetName(text)} placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
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
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "column" }} >
                        {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 15, alignSelf: 'center' }} />}
                        {!Loading &&
                            <Pressable onPress={() => renameCatalog(id)} style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#00B27A", marginBottom: 20 }}>
                                <Text style={{ fontWeight: "600", fontSize: 14, color: "#00B27A" }}>Aggiungi</Text>
                            </Pressable>}
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