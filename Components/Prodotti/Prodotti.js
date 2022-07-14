import { View, Text, ImageBackground, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../../AppContext'
import Header from '../../Reuseable/Header'
import { AntDesign, MaterialIcons } from "react-native-vector-icons"
import CreateCatalogBottomSheet from './CreateCatalogBottomSheet'
import axios from "axios"
import ReNameCatalogBottomSheet from "./ReNameCatalogBottomSheet"
import { REACT_APP_THEMES_PREFIX, REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_THEMES_API_PATH } from "@env"
import uuid from 'react-native-uuid';
const Prodotti = ({ navigation }) => {
    const { Token, userData ,SuccessToast} = useContext(MyContext)
    const [Catalogs, SetCatalogs] = React.useState([])
    const [Reload, SetReload] = React.useState("asd")
    const [Loading, SetLoading] = React.useState(false)
    
    const getCatalogs = async () => {
        SetLoading(true)
        try {
            const url = `https://deployment.restaurants.club/catalogs`;
            const result = await axios.get(url, { headers: { "Authorization": `Bearer ${Token}` } });
            SetCatalogs(result.data)
        } catch (error) {
            console.log(error.message)
        }
        SetLoading(false)
    };



    const deleteCataloge = async (id) => {
        SetLoading(true)
        try {
            const url = `https://deployment.restaurants.club/catalogs/${id}`;
            const result = await axios.delete(url);
            if (!result.data || result.data?.Error || result.data?.error)
                throw new Error(result.data?.Error || result.data?.error);
            SetReload("HMAOD")
            SuccessToast()
        } catch (error) {
            console.log(error.response)
        }
        SetLoading(false)
    };



    const DeleteAlert = (id) =>
        Alert.alert(
            "Alert",
            "are you sure you will delete the categorie ?",
            [

                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteCataloge(id) }
            ]
        );

    React.useEffect(() => { getCatalogs() }, [])
    React.useEffect(() => { getCatalogs() }, [Reload])
    return (
        <Header navigation={navigation} title="Prodotti" icon={require("../../assets/ProdottiIcon.png")} >
            <ScrollView style={{ widht: "100%", marginBottom: 100 }}>
                <CreateCatalogBottomSheet SetReload={SetReload} />
                {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, alignSelf: 'center' }} />}
                {!Loading && Catalogs?.catalogs?.map((item) => {

                    return (

                        <ImageBackground key={uuid.v4()} source={require("../../assets/FolderBG.png")} style={{
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
                })}



            </ScrollView>

        </Header>
    )
}

export default Prodotti