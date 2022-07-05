import { View, Text, Pressable, ScrollView, Image, ActivityIndicator } from 'react-native'
import { Ionicons, Octicons, MaterialCommunityIcons } from "react-native-vector-icons"
import React, { useContext } from 'react'
import axios from "axios"
import Header from '../../../Reuseable/Header'
import { MyContext } from '../../../AppContext'
const AllProducts = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const { userData } = useContext(MyContext)
    const [Products, SetProducts] = React.useState([])
    const [Loading, SetLoading] = React.useState(false)
    const [CatalogCategorieID, Setids] = React.useState({})
    const url = `https://${userData._id}.themes.develop.unifarco.aigotsrl-dev.com/api`;

    const getProducts = async categoryId => {
        try {
            SetLoading(true)
            const url = `https://${userData._id}.themes.develop.unifarco.aigotsrl-dev.com/api/products/category/${categoryId}`;
            const result = await axios.get(url);
            SetProducts(result.data)
            Setids({ catalogId: result.data?.products[0]?.catalog, CategorieId: result.data?.products[0]?.category_Id })
        } catch (error) {
            console.log(error.response?.data)
        }
        SetLoading(false)
    };

    React.useEffect(() => { getProducts(categoryId) }, [])
    return (
        <Header navigation={navigation} title="Products" icon={require("../../../assets/ProdottiIcon.png")} >
            <ScrollView style={{ marginBottom: 100 }}>

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
                {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, alignSelf: 'center' }} />}
                {!Loading && Products?.products?.length === 0 && <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, alignSelf: "center", marginVertical: 15 }}>this categorie has no products yet</Text>}
                {!Loading && Products?.products?.length > 0 && Products?.products?.map((item, index) => {

                    return (
                        <>
                            <View key={index} style={{ backgroundColor: "#F8F8F8", borderRadius: 15, width: "90%", alignSelf: "center", paddingVertical: 30, paddingHorizontal: 25, position: "relative" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", marginBottom: 15 }}>
                                    <Image source={item.image ? { uri: `${url}/${item.image}` } : require("../../../assets/defaultImageProduc.png")} style={{ width: 120, height: 120, marginRight: 20 }} resizeMode="contain" />
                                    <View>
                                        <Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 12, marginBottom: 6 }}>{item.title}</Text>
                                        <Text style={{ color: "#FFA563", fontWeight: "700", fontSize: 18, marginBottom: 6 }}>{item.brand}</Text>
                                        <Text style={{ color: "#00B27A", fontWeight: "700", fontSize: 20, marginBottom: 6 }}>€ {item.price}</Text>
                                        <Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14, marginBottom: 6 }}>GTIN: {item.gtin}</Text>

                                    </View>
                                </View>
                                {item.ingredients?.length > 0 ?

                                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>Ingredienti: {item.ingredients?.map((allrgn) => { return (<Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14 }}> {allrgn}</Text>) })} </Text>
                                    :

                                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>the ingredients of the product is not available  </Text>

                                }

                                {item.allergens?.length > 0 ?

                                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>Allergeni: {item.allergens?.map((allrgn) => { return (<Text> {allrgn}</Text>) })} </Text>
                                    :

                                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>This product has no Allergeni </Text>

                                }

                                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>Formato:<Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14 }}> {item.format}</Text></Text>

                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="fire" color="#C25039" size={35} />
                                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14 }}>Piccante</Text>
                                </View>

                                <View style={{ display: "flex", flexDirection: "row", position: "absolute", top: 0, right: 0, margin: 15, alignItems: "center" }}>

                                    <Pressable onPress={() => navigation.navigate("EditProduct", { productData: item })} style={{ marginRight: 6 }}>
                                        <MaterialCommunityIcons name="square-edit-outline" color="#00B27a" size={25} />
                                    </Pressable>

                                    <Pressable>
                                        <MaterialCommunityIcons name="delete" color="#BE4E4E" size={25} />
                                    </Pressable>

                                </View>
                            </View>
                        </>
                    )
                })}

            </ScrollView>

        </Header>
    )
}

export default AllProducts