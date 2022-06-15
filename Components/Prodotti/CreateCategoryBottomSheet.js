import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Ionicons, Octicons } from "react-native-vector-icons"

const CreateCategoryBottomSheet = () => {
    const refRBSheet = React.useRef();
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
                        backgroundColor: "#000"
                    },
                    container: { height: 600 }
                }}
            >
                <View style={{ width: "100%", padding: 10, height: 550, display:"flex" , flexDirection:"column" , justifyContent:"space-evenly" }}>

                    <Text style={{ color: "#00B27A", fontSize: 22, fontWeight: "600", alignSelf: "center" }}>Aggiungi un nuovo Sotto Menu</Text>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Scegli Icona del Sotto Menu</Text>
                    <View style={{ width: 60, height: 60, borderRadius: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F6F6" }}>

                        <Ionicons name="fast-food-outline" color="#00B27A" size={35} />
                    </View>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Quando è disponibile il Menu</Text>
                    <Pressable style={{ width: "70%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A" }}>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>Pranzo</Text>
                    </Pressable>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", alignSelf: "center" }}>Inserisci il Nome del Sotto Menu</Text>
                    <TextInput placeholderTextColor="#989898" placeholder="Scrivi nome qui..." style={{ width: "70%", alignSelf: "center", height: 40, backgroundColor: "#F6F6F6", borderRadius: 8, paddingHorizontal: 10 }} />
                    <View style={{ width: "100%", justifyContent: "space-evenly", display: "flex", flexDirection: "row" }} >
                        <Pressable style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "white", borderWidth:1 , borderColor:"#00B27A" }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "#00B27A" }}>Crea Sotto Menu</Text>
                        </Pressable>
                        <Pressable style={{ width: "40%", height: 50, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#00B27A" }}>
                            <Text style={{ fontWeight: "600", fontSize: 14, color: "white" }}>Torna Indietro</Text>
                        </Pressable>
                    </View>
                </View>
            </RBSheet>
        </View >

    )
}

export default CreateCategoryBottomSheet