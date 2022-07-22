import { RefreshControl, View, Text, ImageBackground, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../../AppContext'
import Header from '../../Reuseable/Header'
import { AntDesign, MaterialIcons } from "react-native-vector-icons"
import CreateCatalogBottomSheet from './CreateCatalogBottomSheet'
import axios from "axios"
import ReNameCatalogBottomSheet from "./ReNameCatalogBottomSheet"
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { REACT_APP_THEMES_PREFIX, REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_THEMES_API_PATH } from "@env"
import uuid from 'react-native-uuid';
import CatalogCard from './CatalogCard'
const Prodotti = ({ navigation }) => {
    const { Token, userData, SuccessToast } = useContext(MyContext)
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

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        SetLoading(true);
        wait(2000).then(() => getCatalogs());
    }, []);

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
    const setCatalogHiddenProp = async (catalog, isHidden) => {
        try {
            const body = { name: catalog.name, isHidden };
            const url = `https://deployment.restaurants.club/catalogs/${catalog._id}`;
            const result = await axios.patch(url, body);
            if (!result.data || result.data?.Error || result.data?.error)
                throw new Error(result.data?.Error || result.data?.error);
            SuccessToast()
        } catch (error) {
            console.log(error)
        }
    };
    React.useEffect(() => { getCatalogs() }, [])
    React.useEffect(() => { getCatalogs() }, [Reload])
    return (
        <Header navigation={navigation} title="Prodotti" icon={require("../../assets/ProdottiIcon.png")} >
            <CreateCatalogBottomSheet SetReload={SetReload} />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={Loading}
                        tintColor="#00B27A"
                        colors={["#00B27A"]}
                        onRefresh={onRefresh}
                    />
                }
                style={{ widht: "100%", marginBottom: 100, marginTop: 20 }}>
                {/* {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, alignSelf: 'center' }} />} */}
                {!Loading && Catalogs?.catalogs?.map((item) => {
                    return (
                        <CatalogCard setCatalogHiddenProp={setCatalogHiddenProp} item={item} key={uuid.v4()} navigation={navigation} SetReload={SetReload} DeleteAlert={DeleteAlert} />
                    )
                })}
            </ScrollView>
        </Header>
    )
}

export default Prodotti