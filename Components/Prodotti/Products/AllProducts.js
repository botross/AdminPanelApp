import { RefreshControl, View, Text, Pressable, ScrollView, ActivityIndicator, Alert } from 'react-native'
import { Ionicons, Octicons } from "react-native-vector-icons"
import React, { useContext } from 'react'
import axios from "axios"
import Header from '../../../Reuseable/Header'
import { MyContext } from '../../../AppContext'
import { REACT_APP_THEMES_PREFIX, REACT_APP_THEMES_API_PATH, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"

import ProductCard from './ProductCard'
const AllProducts = ({ route, navigation }) => {
    const { categoryId, catalogId } = route.params;
    const { userData, SuccessToast, FailedToast } = useContext(MyContext)
    const [Products, SetProducts] = React.useState([])
    const [Loading, SetLoading] = React.useState(false)
    const [CatalogCategorieID, Setids] = React.useState({ catalogId: catalogId, CategorieId: categoryId })
    const [reLoad, SetReLoad] = React.useState("")

    const url = `https://${userData._id}.${REACT_APP_THEMES_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_THEMES_API_PATH}`;

    
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        SetLoading(true);
        wait(2000).then(() => getProducts(categoryId));
    }, []);


    const getProducts = async categoryId => {
        SetLoading(true)
        try {
            const url = `https://deployment.restaurants.club/products/category/${categoryId}`;
            const result = await axios.get(url);
            SetProducts(result.data)
        } catch (error) {
            console.log(error.message)
        }
        SetLoading(false)
    };

    const DeleteAlert = (id) =>
        Alert.alert(
            "Alert",
            "are you sure you will delete the product ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => DeleteProduct(id) }
            ]
        );
    const DeleteProduct = async (id) => {
        try {
            const url = `https://deployment.restaurants.club/products/${id}`;
            const result = await axios.delete(url);
            if (!result.data || result.data?.Error || result.data?.error)
                throw new Error(result.data?.Error || result.data?.error);
            SuccessToast()
            SetReLoad("ASDASD")
        } catch (error) {
            console.log(error.message)
            FailedToast()
        }
    };

    React.useEffect(() => {
        getProducts(categoryId)
        const willFocusSubscription = navigation.addListener('focus', () => {
            getProducts(categoryId)
        });

        return willFocusSubscription;
    }, [])
    React.useEffect(() => { getProducts(categoryId) }, [reLoad])
    return (
        <Header navigation={navigation} title="Products" icon={require("../../../assets/ProdottiIcon.png")} >
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back-circle" color="#00B27A" size={50} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("CreateProduct", { CatalogCategorieID: CatalogCategorieID })} style={{ width: "70%", height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginVertical: 10 }}>
                    <Octicons name="diff-added" color="#00B27A" size={25} />
                    <Text style={{ fontWeight: "500", fontSize: 12, color: "#00B27A", marginLeft: 10 }}>Crea un nuovo elemento in questa sezione</Text>
                </Pressable>
            </View>
            <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, alignSelf: "center", marginVertical: 15 }}>Prodotti</Text>

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={Loading}
                        tintColor="#00B27A"
                        colors={["#00B27A"]}
                        onRefresh={onRefresh}
                    />
                }
                style={{ marginBottom: 100 }}>



                {/* {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, alignSelf: 'center' }} />} */}
                {!Loading && Products?.products?.length === 0 && <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, alignSelf: "center", marginVertical: 15 }}>this categorie has no products yet</Text>}
                {!Loading && Products?.products?.length > 0 && Products?.products?.map((item) => {

                    return (
                        <ProductCard item={item} navigation={navigation} DeleteAlert={DeleteAlert} />

                    )
                })}

            </ScrollView>

        </Header>
    )
}

export default AllProducts