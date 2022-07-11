import { View, Text, ImageBackground, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../../Reuseable/Header'
import { AntDesign, MaterialIcons, Ionicons } from "react-native-vector-icons"
import axios from "axios"
import CreateSubCategoryBottomSheet from './CreateSubCategoryBottomSheet'
import ReNameSubCategoryBottomSheet from './ReNameSubCategoryBottomSheet'
import { REACT_APP_THEMES_PREFIX,REACT_APP_THEMES_API_PATH,  REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"

import { MyContext } from '../../../AppContext'
const SubCategories = ({ route, navigation }) => {
    const { userData ,SuccessToast} = useContext(MyContext)
    const { catalogId } = route.params;
    const [Categories, SetCategories] = React.useState({ categories: [{ catalog: 123 }] })
    const [reload, SetReload] = React.useState("Mo")
    const [Loading, SetLoading] = React.useState(false)
    const getCategories = async catalogId => {
        SetLoading(true)
        try {
            const url = `https://${userData._id}.${REACT_APP_THEMES_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_THEMES_API_PATH}/categories/catalog/${catalogId}`;
            const result = await axios.get(url);
            SetCategories(result.data)
        } catch (error) {
            console.log(error)
        }
        SetLoading(false)
    };

    const deleteCategorie = async (id) => {
        SetLoading(true)
        try {
            const url = `https://${userData._id}.${REACT_APP_THEMES_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_THEMES_API_PATH}/categories/${id}`;
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

    React.useEffect(() => { getCategories(catalogId) }, [])
    React.useEffect(() => { getCategories(catalogId) }, [reload])


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
                { text: "OK", onPress: () => deleteCategorie(id) }
            ]
        );

    return (

        <Header navigation={navigation} title="Sub Menu" icon={require("../../../assets/ProdottiIcon.png")} >
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back-circle" color="#00B27A" size={50} />
                </Pressable>
                <CreateSubCategoryBottomSheet catalogId={catalogId} SetReload={SetReload} />
            </View>

            <ScrollView style={{ widht: "100%", marginBottom: 100 }}>
                {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, alignSelf: 'center' }} />}
                {!Loading && Categories?.categories?.length === 0 && <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, alignSelf: "center", marginVertical: 15 }}>this Catalog has no categories yet</Text>}
                {!Loading && Categories?.categories?.length > 0 && Categories?.categories?.map((item, index) => {

                    return (
                        <>
                            <ImageBackground key={index} source={require("../../../assets/FolderBG.png")} style={{
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
                                <Text style={{ fontSize: 30, fontWeight: "700", color: "#00B27A", marginTop: 20 }}>{item.name}</Text>
                                <Text style={{ fontSize: 16, fontWeight: "500", color: "#636363", marginVertical: 15 }}>{item.products?.length} unità disponibili</Text>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

                                    <Pressable onPress={() => navigation.navigate("AllProducts", { categoryId: item._id })} style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#00B27A", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                        <AntDesign name="arrowright" color="white" size={25} />
                                    </Pressable>


                                    <ReNameSubCategoryBottomSheet name={item.name} id={item._id} catalogId={item.catalog} SetReload={SetReload} />
                                    <Pressable onPress={() => DeleteAlert(item._id)} style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: "#C25039", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                        <MaterialIcons name="delete" color="white" size={25} />
                                    </Pressable>
                                </View>
                            </ImageBackground>
                        </>
                    )
                })}

            </ScrollView>
        </Header>
    )
}

export default SubCategories