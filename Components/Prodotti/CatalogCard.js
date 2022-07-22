import { RefreshControl, View, Text, ImageBackground, Pressable } from 'react-native'

import React from 'react'
import ReNameCatalogBottomSheet from "./ReNameCatalogBottomSheet"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign, MaterialIcons } from "react-native-vector-icons"

const CatalogCard = ({ item, navigation, setCatalogHiddenProp, DeleteAlert, SetReload }) => {
    const [isHidden, setIsHidden] = React.useState(!!item.isHidden);

    function handleSetHidden() {
        setIsHidden(!isHidden);
        onSetHiddenProp(item, !isHidden);
    };
    return (
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
            <Text style={{ fontSize: 22, fontWeight: "700", color: "#00B27A", marginTop: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#636363", marginVertical: 15 }}>{item.categories?.length} unità disponibili</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                <BouncyCheckbox isChecked={isHidden} size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { handleSetHidden() }} />
                <Text style={{ color: "#989898", fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Nascondi Menu</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => navigation.navigate("SubCategories", { catalogId: item._id })} style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                    <AntDesign name="arrowright" color="white" size={25} />
                </Pressable>
                <ReNameCatalogBottomSheet SetReload={SetReload} id={item._id} name={item.name} />
                <Pressable onPress={() => DeleteAlert(item._id)} style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#C25039", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                    <MaterialIcons name="delete" color="white" size={25} />
                </Pressable>
            </View>
        </ImageBackground>
    )
}

export default CatalogCard